import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum {
    LineItemRecurrenceTypeUnspecified = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
    LineItemRecurrenceTypePeriodic = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC",
    LineItemRecurrenceTypeOneTime = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
}
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum {
    LineItemStateUnspecified = "LINE_ITEM_STATE_UNSPECIFIED",
    LineItemStateActive = "LINE_ITEM_STATE_ACTIVE",
    LineItemStateInactive = "LINE_ITEM_STATE_INACTIVE",
    LineItemStateNew = "LINE_ITEM_STATE_NEW",
    LineItemStateActivating = "LINE_ITEM_STATE_ACTIVATING",
    LineItemStateDeactivating = "LINE_ITEM_STATE_DEACTIVATING"
}
/**
 * Individual line item definition of a subscription. Next id: 8
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem extends SpeakeasyBase {
    description?: string;
    lineItemFreeTrialEndTime?: string;
    lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];
    oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
    product?: string;
    recurrenceType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum;
    state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum;
}
