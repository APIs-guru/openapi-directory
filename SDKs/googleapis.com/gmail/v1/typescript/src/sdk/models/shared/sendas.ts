import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmtpMsa } from "./smtpmsa";


export enum SendAsVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending"
}


// SendAs
/** 
 * Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
**/
export class SendAs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrimary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replyToAddress" })
  replyToAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=sendAsEmail" })
  sendAsEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=smtpMsa" })
  smtpMsa?: SmtpMsa;

  @SpeakeasyMetadata({ data: "json, name=treatAsAlias" })
  treatAsAlias?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verificationStatus" })
  verificationStatus?: SendAsVerificationStatusEnum;
}
