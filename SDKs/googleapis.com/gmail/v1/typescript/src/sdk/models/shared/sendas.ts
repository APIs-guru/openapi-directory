import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmtpMsa } from "./smtpmsa";

export enum SendAsVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified"
,    Accepted = "accepted"
,    Pending = "pending"
}


// SendAs
/** 
 * Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
**/
export class SendAs extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=isPrimary" })
  isPrimary?: boolean;

  @Metadata({ data: "json, name=replyToAddress" })
  replyToAddress?: string;

  @Metadata({ data: "json, name=sendAsEmail" })
  sendAsEmail?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=smtpMsa" })
  smtpMsa?: SmtpMsa;

  @Metadata({ data: "json, name=treatAsAlias" })
  treatAsAlias?: boolean;

  @Metadata({ data: "json, name=verificationStatus" })
  verificationStatus?: SendAsVerificationStatusEnum;
}
