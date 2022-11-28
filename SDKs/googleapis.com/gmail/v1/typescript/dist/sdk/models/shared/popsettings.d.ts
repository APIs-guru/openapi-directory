import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PopSettingsAccessWindowEnum {
    AccessWindowUnspecified = "accessWindowUnspecified",
    Disabled = "disabled",
    FromNowOn = "fromNowOn",
    AllMail = "allMail"
}
export declare enum PopSettingsDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified",
    LeaveInInbox = "leaveInInbox",
    Archive = "archive",
    Trash = "trash",
    MarkRead = "markRead"
}
/**
 * POP settings for an account.
**/
export declare class PopSettings extends SpeakeasyBase {
    accessWindow?: PopSettingsAccessWindowEnum;
    disposition?: PopSettingsDispositionEnum;
}
