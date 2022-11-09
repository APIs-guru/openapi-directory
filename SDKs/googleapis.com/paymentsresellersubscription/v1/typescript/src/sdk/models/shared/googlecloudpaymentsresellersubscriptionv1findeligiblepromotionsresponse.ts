import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";


// GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
/** 
 * Response containing the found promotions for the current user.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1Promotion })
  promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
