import { SpeakeasyBase } from "../../../internal/utils";
import { SmtpMsa } from "./smtpmsa";
export declare enum SendAsVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending"
}
/**
 * Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
**/
export declare class SendAs extends SpeakeasyBase {
    displayName?: string;
    isDefault?: boolean;
    isPrimary?: boolean;
    replyToAddress?: string;
    sendAsEmail?: string;
    signature?: string;
    smtpMsa?: SmtpMsa;
    treatAsAlias?: boolean;
    verificationStatus?: SendAsVerificationStatusEnum;
}
