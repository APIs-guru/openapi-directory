import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";


export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum {
    LineItemRecurrenceTypeUnspecified = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
    LineItemRecurrenceTypePeriodic = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC",
    LineItemRecurrenceTypeOneTime = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
}

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum {
    LineItemStateUnspecified = "LINE_ITEM_STATE_UNSPECIFIED",
    LineItemStateActive = "LINE_ITEM_STATE_ACTIVE",
    LineItemStateInactive = "LINE_ITEM_STATE_INACTIVE",
    LineItemStateNew = "LINE_ITEM_STATE_NEW",
    LineItemStateActivating = "LINE_ITEM_STATE_ACTIVATING",
    LineItemStateDeactivating = "LINE_ITEM_STATE_DEACTIVATING"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
/** 
 * Individual line item definition of a subscription. Next id: 9
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemFreeTrialEndTime" })
  lineItemFreeTrialEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemPromotionSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec })
  lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];

  @SpeakeasyMetadata({ data: "json, name=oneTimeRecurrenceDetails" })
  oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrenceType" })
  recurrenceType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum;
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput
/** 
 * Individual line item definition of a subscription. Next id: 9
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemPromotionSpecs", elemType: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput })
  lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[];

  @SpeakeasyMetadata({ data: "json, name=oneTimeRecurrenceDetails" })
  oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;
}
