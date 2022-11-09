import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutoForwardingDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified"
,    LeaveInInbox = "leaveInInbox"
,    Archive = "archive"
,    Trash = "trash"
,    MarkRead = "markRead"
}


// AutoForwarding
/** 
 * Auto-forwarding settings for an account.
**/
export class AutoForwarding extends SpeakeasyBase {
  @Metadata({ data: "json, name=disposition" })
  disposition?: AutoForwardingDispositionEnum;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
