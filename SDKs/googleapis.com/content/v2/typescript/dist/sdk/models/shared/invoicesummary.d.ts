import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";
import { Promotion } from "./promotion";
export declare class InvoiceSummary extends SpeakeasyBase {
    additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];
    customerBalance?: Amount;
    googleBalance?: Amount;
    merchantBalance?: Amount;
    productTotal?: Amount;
    promotionSummaries?: Promotion[];
}
