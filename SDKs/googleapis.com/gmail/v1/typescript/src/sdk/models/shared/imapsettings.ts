import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImapSettingsExpungeBehaviorEnum {
    ExpungeBehaviorUnspecified = "expungeBehaviorUnspecified",
    Archive = "archive",
    Trash = "trash",
    DeleteForever = "deleteForever"
}


// ImapSettings
/** 
 * IMAP settings for an account.
**/
export class ImapSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoExpunge" })
  autoExpunge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expungeBehavior" })
  expungeBehavior?: ImapSettingsExpungeBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=maxFolderSize" })
  maxFolderSize?: number;
}
