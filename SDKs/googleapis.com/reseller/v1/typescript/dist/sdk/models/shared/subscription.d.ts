import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RenewalSettings } from "./renewalsettings";
import { Seats } from "./seats";
/**
 * In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses.
**/
export declare class SubscriptionPlanCommitmentInterval extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
/**
 * The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
**/
export declare class SubscriptionPlan extends SpeakeasyBase {
    commitmentInterval?: SubscriptionPlanCommitmentInterval;
    isCommitmentPlan?: boolean;
    planName?: string;
}
/**
 * Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
**/
export declare class SubscriptionTransferInfo extends SpeakeasyBase {
    currentLegacySkuId?: string;
    minimumTransferableSeats?: number;
    transferabilityExpirationTime?: string;
}
/**
 * The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
**/
export declare class SubscriptionTrialSettings extends SpeakeasyBase {
    isInTrial?: boolean;
    trialEndTime?: string;
}
/**
 * JSON template for a subscription.
**/
export declare class Subscription extends SpeakeasyBase {
    billingMethod?: string;
    creationTime?: string;
    customerDomain?: string;
    customerId?: string;
    dealCode?: string;
    kind?: string;
    plan?: SubscriptionPlan;
    purchaseOrderId?: string;
    renewalSettings?: RenewalSettings;
    resourceUiUrl?: string;
    seats?: Seats;
    skuId?: string;
    skuName?: string;
    status?: string;
    subscriptionId?: string;
    suspensionReasons?: string[];
    transferInfo?: SubscriptionTransferInfo;
    trialSettings?: SubscriptionTrialSettings;
}
