import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExitEventTypeEnum {
    ExitEventTypeUnspecified = "EXIT_EVENT_TYPE_UNSPECIFIED",
    ExitEventTypeDefault = "EXIT_EVENT_TYPE_DEFAULT",
    ExitEventTypeBackup = "EXIT_EVENT_TYPE_BACKUP"
}
/**
 * Exit event of the creative.
**/
export declare class ExitEvent extends SpeakeasyBase {
    name?: string;
    reportingName?: string;
    type?: ExitEventTypeEnum;
    url?: string;
}
