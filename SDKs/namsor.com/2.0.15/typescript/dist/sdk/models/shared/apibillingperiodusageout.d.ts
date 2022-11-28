import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current billing period.
**/
export declare class ApiBillingPeriodUsageOut extends SpeakeasyBase {
    apiKey?: string;
    billingStatus?: string;
    hardLimit?: number;
    periodEnded?: number;
    periodStarted?: number;
    softLimit?: number;
    stripeCurrentPeriodEnd?: number;
    stripeCurrentPeriodStart?: number;
    subscriptionStarted?: number;
    usage?: number;
}
