import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WarningPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Alert = "ALERT"
}
/**
 * A non-fatal problem encountered during the execution of the build.
**/
export declare class Warning extends SpeakeasyBase {
    priority?: WarningPriorityEnum;
    text?: string;
}
