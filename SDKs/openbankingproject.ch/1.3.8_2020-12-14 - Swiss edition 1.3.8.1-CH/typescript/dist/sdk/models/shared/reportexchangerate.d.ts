import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exchange Rate.
**/
export declare class ReportExchangeRate extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: string;
    quotationDate: Date;
    sourceCurrency: string;
    targetCurrency: string;
    unitCurrency: string;
}
