import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutoForwardingDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified",
    LeaveInInbox = "leaveInInbox",
    Archive = "archive",
    Trash = "trash",
    MarkRead = "markRead"
}


// AutoForwarding
/** 
 * Auto-forwarding settings for an account.
**/
export class AutoForwarding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disposition" })
  disposition?: AutoForwardingDispositionEnum;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
