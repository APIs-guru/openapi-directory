import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";
export declare class InvoiceSummary extends SpeakeasyBase {
    additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];
    productTotal?: Amount;
}
