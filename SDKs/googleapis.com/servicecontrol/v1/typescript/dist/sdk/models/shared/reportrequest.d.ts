import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Request message for the Report method.
**/
export declare class ReportRequest extends SpeakeasyBase {
    operations?: Operation[];
    serviceConfigId?: string;
}
