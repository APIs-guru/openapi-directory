import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccount
/** 
 * A subscription to receive Google PubSub notifications.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
