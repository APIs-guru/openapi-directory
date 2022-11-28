import { SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";
export declare enum EnterpriseCrmEventbusProtoErrorDetailSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warn = "WARN",
    Info = "INFO"
}
/**
 * An error, warning, or information message associated with a workflow.
**/
export declare class EnterpriseCrmEventbusProtoErrorDetail extends SpeakeasyBase {
    errorCode?: CrmlogErrorCode;
    errorMessage?: string;
    severity?: EnterpriseCrmEventbusProtoErrorDetailSeverityEnum;
    taskNumber?: number;
}
