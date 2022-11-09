import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum {
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
export declare class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest extends SpeakeasyBase {
    cancelImmediately?: boolean;
    cancellationReason?: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
}
