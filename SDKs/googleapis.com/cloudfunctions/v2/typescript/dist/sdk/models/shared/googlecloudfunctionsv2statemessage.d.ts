import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudFunctionsV2StateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * Informational messages about the state of the Cloud Function or Operation.
**/
export declare class GoogleCloudFunctionsV2StateMessage extends SpeakeasyBase {
    message?: string;
    severity?: GoogleCloudFunctionsV2StateMessageSeverityEnum;
    type?: string;
}
