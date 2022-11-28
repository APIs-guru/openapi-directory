import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ValidationErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL"
}
/**
 * Represents a single validation error.
**/
export declare class GoogleCloudDialogflowV2ValidationError extends SpeakeasyBase {
    entries?: string[];
    errorMessage?: string;
    severity?: GoogleCloudDialogflowV2ValidationErrorSeverityEnum;
}
