import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails";

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum {
    LineItemRecurrenceTypeUnspecified = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED"
,    LineItemRecurrenceTypePeriodic = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC"
,    LineItemRecurrenceTypeOneTime = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
}

export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum {
    LineItemStateUnspecified = "LINE_ITEM_STATE_UNSPECIFIED"
,    LineItemStateActive = "LINE_ITEM_STATE_ACTIVE"
,    LineItemStateInactive = "LINE_ITEM_STATE_INACTIVE"
,    LineItemStateNew = "LINE_ITEM_STATE_NEW"
,    LineItemStateActivating = "LINE_ITEM_STATE_ACTIVATING"
,    LineItemStateDeactivating = "LINE_ITEM_STATE_DEACTIVATING"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
/** 
 * Individual line item definition of a subscription. Next id: 8
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lineItemFreeTrialEndTime" })
  lineItemFreeTrialEndTime?: string;

  @Metadata({ data: "json, name=lineItemPromotionSpecs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec })
  lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];

  @Metadata({ data: "json, name=oneTimeRecurrenceDetails" })
  oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;

  @Metadata({ data: "json, name=product" })
  product?: string;

  @Metadata({ data: "json, name=recurrenceType" })
  recurrenceType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum;
}
