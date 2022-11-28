import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum {
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


export class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelImmediately" })
  cancelImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancellationReason" })
  cancellationReason?: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
}
