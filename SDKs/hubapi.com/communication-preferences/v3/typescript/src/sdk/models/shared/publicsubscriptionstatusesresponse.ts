import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicSubscriptionStatus } from "./publicsubscriptionstatus";


// PublicSubscriptionStatusesResponse
/** 
 * A collection of subscription statuses for a contact.
**/
export class PublicSubscriptionStatusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recipient" })
  recipient: string;

  @Metadata({ data: "json, name=subscriptionStatuses", elemType: shared.PublicSubscriptionStatus })
  subscriptionStatuses: PublicSubscriptionStatus[];
}
