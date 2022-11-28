import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for notebook instances to report information to Notebooks API.
**/
export declare class ReportInstanceInfoRequest extends SpeakeasyBase {
    metadata?: Map<string, string>;
    vmId?: string;
}
