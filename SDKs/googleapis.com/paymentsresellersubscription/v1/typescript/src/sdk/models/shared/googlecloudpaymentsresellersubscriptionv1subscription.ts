import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitem";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1Location } from "./googlecloudpaymentsresellersubscriptionv1location";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails";

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED"
,    ProcessingStateCancelling = "PROCESSING_STATE_CANCELLING"
,    ProcessingStateRecurring = "PROCESSING_STATE_RECURRING"
}

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    StateCreated = "STATE_CREATED"
,    StateActive = "STATE_ACTIVE"
,    StateCancelled = "STATE_CANCELLED"
,    StateInGracePeriod = "STATE_IN_GRACE_PERIOD"
,    StateCancelAtEndOfCycle = "STATE_CANCEL_AT_END_OF_CYCLE"
,    StateSuspended = "STATE_SUSPENDED"
}


// GoogleCloudPaymentsResellerSubscriptionV1Subscription
/** 
 * A Subscription resource managed by 3P Partners.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationDetails" })
  cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=cycleEndTime" })
  cycleEndTime?: string;

  @Metadata({ data: "json, name=endUserEntitled" })
  endUserEntitled?: boolean;

  @Metadata({ data: "json, name=freeTrialEndTime" })
  freeTrialEndTime?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem })
  lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partnerUserToken" })
  partnerUserToken?: string;

  @Metadata({ data: "json, name=processingState" })
  processingState?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum;

  @Metadata({ data: "json, name=products" })
  products?: string[];

  @Metadata({ data: "json, name=promotionSpecs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec })
  promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];

  @Metadata({ data: "json, name=promotions" })
  promotions?: string[];

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=renewalTime" })
  renewalTime?: string;

  @Metadata({ data: "json, name=serviceLocation" })
  serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgradeDowngradeDetails" })
  upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}
