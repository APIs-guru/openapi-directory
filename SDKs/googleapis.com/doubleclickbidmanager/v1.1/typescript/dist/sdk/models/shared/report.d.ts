import { SpeakeasyBase } from "../../../internal/utils";
import { ReportKey } from "./reportkey";
import { ReportMetadata } from "./reportmetadata";
import { Parameters } from "./parameters";
/**
 * Represents a report.
**/
export declare class Report extends SpeakeasyBase {
    key?: ReportKey;
    metadata?: ReportMetadata;
    params?: Parameters;
}
