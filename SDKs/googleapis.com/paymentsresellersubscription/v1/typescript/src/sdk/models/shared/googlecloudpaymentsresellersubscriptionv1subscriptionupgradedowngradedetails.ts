import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum {
    BillingCycleSpecUnspecified = "BILLING_CYCLE_SPEC_UNSPECIFIED",
    BillingCycleSpecAlignWithPreviousSubscription = "BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION",
    BillingCycleSpecStartImmediately = "BILLING_CYCLE_SPEC_START_IMMEDIATELY"
}


// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails
/** 
 * Details about the previous subscription that this new subscription upgrades/downgrades from.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingCycleSpec" })
  billingCycleSpec?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=previousSubscriptionId" })
  previousSubscriptionId?: string;
}
