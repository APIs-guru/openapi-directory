import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitem";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1Location } from "./googlecloudpaymentsresellersubscriptionv1location";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitem";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";


export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    ProcessingStateCancelling = "PROCESSING_STATE_CANCELLING",
    ProcessingStateRecurring = "PROCESSING_STATE_RECURRING"
}

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCreated = "STATE_CREATED",
    StateActive = "STATE_ACTIVE",
    StateCancelled = "STATE_CANCELLED",
    StateInGracePeriod = "STATE_IN_GRACE_PERIOD",
    StateCancelAtEndOfCycle = "STATE_CANCEL_AT_END_OF_CYCLE",
    StateSuspended = "STATE_SUSPENDED"
}


// GoogleCloudPaymentsResellerSubscriptionV1Subscription
/** 
 * A Subscription resource managed by 3P Partners.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationDetails" })
  cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=cycleEndTime" })
  cycleEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endUserEntitled" })
  endUserEntitled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeTrialEndTime" })
  freeTrialEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem })
  lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerUserToken" })
  partnerUserToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processingState" })
  processingState?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec })
  promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];

  @SpeakeasyMetadata({ data: "json, name=promotions" })
  promotions?: string[];

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalTime" })
  renewalTime?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceLocation" })
  serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeDowngradeDetails" })
  upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput
/** 
 * A Subscription resource managed by 3P Partners.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationDetails" })
  cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput })
  lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerUserToken" })
  partnerUserToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput })
  promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[];

  @SpeakeasyMetadata({ data: "json, name=promotions" })
  promotions?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceLocation" })
  serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;

  @SpeakeasyMetadata({ data: "json, name=upgradeDowngradeDetails" })
  upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}
