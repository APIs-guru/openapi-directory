import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";
/**
 * Response containing the found promotions for the current user.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
