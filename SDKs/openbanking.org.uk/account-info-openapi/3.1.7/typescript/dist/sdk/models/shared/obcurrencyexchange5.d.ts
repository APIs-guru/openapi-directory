import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
**/
export declare class ObCurrencyExchange5InstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Set of elements used to provide details on the currency exchange.
**/
export declare class ObCurrencyExchange5 extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: number;
    instructedAmount?: ObCurrencyExchange5InstructedAmount;
    quotationDate?: Date;
    sourceCurrency: string;
    targetCurrency?: string;
    unitCurrency?: string;
}
