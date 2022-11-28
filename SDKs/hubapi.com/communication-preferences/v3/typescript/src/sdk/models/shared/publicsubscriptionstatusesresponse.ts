import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicSubscriptionStatus } from "./publicsubscriptionstatus";



// PublicSubscriptionStatusesResponse
/** 
 * A collection of subscription statuses for a contact.
**/
export class PublicSubscriptionStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionStatuses", elemType: PublicSubscriptionStatus })
  subscriptionStatuses: PublicSubscriptionStatus[];
}
