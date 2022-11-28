import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The API Plan governing the subscription.
**/
export declare class ApiPlanSubscriptionOut extends SpeakeasyBase {
    apiKey?: string;
    currency?: string;
    currencyFactor?: number;
    planBaseFeesKey?: string;
    planEnded?: number;
    planName?: string;
    planQuota?: number;
    planStarted?: number;
    planStatus?: string;
    price?: number;
    priceOverage?: number;
    priceOverageUsd?: number;
    priceUsd?: number;
    priorPlanStarted?: number;
    stripeCustomerId?: string;
    stripeStatus?: string;
    stripeSubscription?: string;
    taxRate?: number;
    userId?: string;
}
