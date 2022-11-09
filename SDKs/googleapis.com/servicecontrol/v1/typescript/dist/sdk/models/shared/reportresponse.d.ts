import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportError } from "./reporterror";
/**
 * Response message for the Report method.
**/
export declare class ReportResponse extends SpeakeasyBase {
    reportErrors?: ReportError[];
    serviceConfigId?: string;
    serviceRolloutId?: string;
}
