import { SpeakeasyBase } from "../../../internal/utils";
import { BillingRate } from "./billingrate";
/**
 * Billing Rate List Response
**/
export declare class BillingRatesListResponse extends SpeakeasyBase {
    billingRates?: BillingRate[];
    kind?: string;
    nextPageToken?: string;
}
