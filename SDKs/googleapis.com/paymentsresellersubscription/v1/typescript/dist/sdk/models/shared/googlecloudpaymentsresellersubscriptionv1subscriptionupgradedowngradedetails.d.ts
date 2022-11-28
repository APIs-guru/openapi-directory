import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum {
    BillingCycleSpecUnspecified = "BILLING_CYCLE_SPEC_UNSPECIFIED",
    BillingCycleSpecAlignWithPreviousSubscription = "BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION",
    BillingCycleSpecStartImmediately = "BILLING_CYCLE_SPEC_START_IMMEDIATELY"
}
/**
 * Details about the previous subscription that this new subscription upgrades/downgrades from.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails extends SpeakeasyBase {
    billingCycleSpec?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
    previousSubscriptionId?: string;
}
