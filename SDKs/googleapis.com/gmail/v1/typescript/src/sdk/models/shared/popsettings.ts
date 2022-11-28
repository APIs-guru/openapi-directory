import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PopSettingsAccessWindowEnum {
    AccessWindowUnspecified = "accessWindowUnspecified",
    Disabled = "disabled",
    FromNowOn = "fromNowOn",
    AllMail = "allMail"
}

export enum PopSettingsDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified",
    LeaveInInbox = "leaveInInbox",
    Archive = "archive",
    Trash = "trash",
    MarkRead = "markRead"
}


// PopSettings
/** 
 * POP settings for an account.
**/
export class PopSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessWindow" })
  accessWindow?: PopSettingsAccessWindowEnum;

  @SpeakeasyMetadata({ data: "json, name=disposition" })
  disposition?: PopSettingsDispositionEnum;
}
