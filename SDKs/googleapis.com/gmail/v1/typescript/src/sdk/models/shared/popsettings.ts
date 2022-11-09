import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PopSettingsAccessWindowEnum {
    AccessWindowUnspecified = "accessWindowUnspecified"
,    Disabled = "disabled"
,    FromNowOn = "fromNowOn"
,    AllMail = "allMail"
}

export enum PopSettingsDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified"
,    LeaveInInbox = "leaveInInbox"
,    Archive = "archive"
,    Trash = "trash"
,    MarkRead = "markRead"
}


// PopSettings
/** 
 * POP settings for an account.
**/
export class PopSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessWindow" })
  accessWindow?: PopSettingsAccessWindowEnum;

  @Metadata({ data: "json, name=disposition" })
  disposition?: PopSettingsDispositionEnum;
}
