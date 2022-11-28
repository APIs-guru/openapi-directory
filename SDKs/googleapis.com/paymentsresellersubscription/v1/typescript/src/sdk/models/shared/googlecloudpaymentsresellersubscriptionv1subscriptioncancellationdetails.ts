import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum {
    CancellationReasonUnspecified = "CANCELLATION_REASON_UNSPECIFIED",
    CancellationReasonFraud = "CANCELLATION_REASON_FRAUD",
    CancellationReasonRemorse = "CANCELLATION_REASON_REMORSE",
    CancellationReasonAccidentalPurchase = "CANCELLATION_REASON_ACCIDENTAL_PURCHASE",
    CancellationReasonPastDue = "CANCELLATION_REASON_PAST_DUE",
    CancellationReasonAccountClosed = "CANCELLATION_REASON_ACCOUNT_CLOSED",
    CancellationReasonUpgradeDowngrade = "CANCELLATION_REASON_UPGRADE_DOWNGRADE",
    CancellationReasonUserDelinquency = "CANCELLATION_REASON_USER_DELINQUENCY",
    CancellationReasonOther = "CANCELLATION_REASON_OTHER"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails
/** 
 * Describes the details of a cancelled or cancelling subscription.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
}
