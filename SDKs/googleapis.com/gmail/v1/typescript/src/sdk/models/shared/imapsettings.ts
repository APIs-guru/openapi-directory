import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImapSettingsExpungeBehaviorEnum {
    ExpungeBehaviorUnspecified = "expungeBehaviorUnspecified"
,    Archive = "archive"
,    Trash = "trash"
,    DeleteForever = "deleteForever"
}


// ImapSettings
/** 
 * IMAP settings for an account.
**/
export class ImapSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoExpunge" })
  autoExpunge?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expungeBehavior" })
  expungeBehavior?: ImapSettingsExpungeBehaviorEnum;

  @Metadata({ data: "json, name=maxFolderSize" })
  maxFolderSize?: number;
}
