import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicSubscriptionStatus } from "./publicsubscriptionstatus";
/**
 * A collection of subscription statuses for a contact.
**/
export declare class PublicSubscriptionStatusesResponse extends SpeakeasyBase {
    recipient: string;
    subscriptionStatuses: PublicSubscriptionStatus[];
}
