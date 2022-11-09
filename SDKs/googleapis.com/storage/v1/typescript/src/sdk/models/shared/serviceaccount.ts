import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * A subscription to receive Google PubSub notifications.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
