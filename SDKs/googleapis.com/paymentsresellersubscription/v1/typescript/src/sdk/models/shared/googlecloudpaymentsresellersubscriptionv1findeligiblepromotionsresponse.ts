import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";



// GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
/** 
 * Response containing the found promotions for the current user.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudPaymentsResellerSubscriptionV1Promotion })
  promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
