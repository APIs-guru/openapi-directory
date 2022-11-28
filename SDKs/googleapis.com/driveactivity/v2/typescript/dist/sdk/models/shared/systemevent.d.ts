import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SystemEventTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    UserDeletion = "USER_DELETION",
    TrashAutoPurge = "TRASH_AUTO_PURGE"
}
/**
 * Event triggered by system operations instead of end users.
**/
export declare class SystemEvent extends SpeakeasyBase {
    type?: SystemEventTypeEnum;
}
