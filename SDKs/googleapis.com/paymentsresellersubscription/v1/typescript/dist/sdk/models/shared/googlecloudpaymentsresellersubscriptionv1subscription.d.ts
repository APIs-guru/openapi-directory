import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitem";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1Location } from "./googlecloudpaymentsresellersubscriptionv1location";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    ProcessingStateCancelling = "PROCESSING_STATE_CANCELLING",
    ProcessingStateRecurring = "PROCESSING_STATE_RECURRING"
}
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCreated = "STATE_CREATED",
    StateActive = "STATE_ACTIVE",
    StateCancelled = "STATE_CANCELLED",
    StateInGracePeriod = "STATE_IN_GRACE_PERIOD",
    StateCancelAtEndOfCycle = "STATE_CANCEL_AT_END_OF_CYCLE",
    StateSuspended = "STATE_SUSPENDED"
}
/**
 * A Subscription resource managed by 3P Partners.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1Subscription extends SpeakeasyBase {
    cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
    createTime?: string;
    cycleEndTime?: string;
    endUserEntitled?: boolean;
    freeTrialEndTime?: string;
    lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[];
    name?: string;
    partnerUserToken?: string;
    processingState?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum;
    products?: string[];
    promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];
    promotions?: string[];
    redirectUri?: string;
    renewalTime?: string;
    serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;
    state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum;
    updateTime?: string;
    upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}
