import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL"
}
/**
 * Represents a single validation error.
**/
export declare class GoogleCloudDialogflowV2beta1ValidationError extends SpeakeasyBase {
    entries?: string[];
    errorMessage?: string;
    severity?: GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum;
}
