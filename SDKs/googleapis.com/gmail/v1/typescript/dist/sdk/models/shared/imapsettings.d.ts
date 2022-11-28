import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImapSettingsExpungeBehaviorEnum {
    ExpungeBehaviorUnspecified = "expungeBehaviorUnspecified",
    Archive = "archive",
    Trash = "trash",
    DeleteForever = "deleteForever"
}
/**
 * IMAP settings for an account.
**/
export declare class ImapSettings extends SpeakeasyBase {
    autoExpunge?: boolean;
    enabled?: boolean;
    expungeBehavior?: ImapSettingsExpungeBehaviorEnum;
    maxFolderSize?: number;
}
