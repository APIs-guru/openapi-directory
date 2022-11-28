import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeReport } from "./changereport";
import { Diagnostic } from "./diagnostic";
/**
 * Response message for GenerateConfigReport method.
**/
export declare class GenerateConfigReportResponse extends SpeakeasyBase {
    changeReports?: ChangeReport[];
    diagnostics?: Diagnostic[];
    id?: string;
    serviceName?: string;
}
