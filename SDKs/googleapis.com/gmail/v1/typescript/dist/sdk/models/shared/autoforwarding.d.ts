import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoForwardingDispositionEnum {
    DispositionUnspecified = "dispositionUnspecified",
    LeaveInInbox = "leaveInInbox",
    Archive = "archive",
    Trash = "trash",
    MarkRead = "markRead"
}
/**
 * Auto-forwarding settings for an account.
**/
export declare class AutoForwarding extends SpeakeasyBase {
    disposition?: AutoForwardingDispositionEnum;
    emailAddress?: string;
    enabled?: boolean;
}
