import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObCurrencyExchange5InstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
**/
export class ObCurrencyExchange5InstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObCurrencyExchange5
/** 
 * Set of elements used to provide details on the currency exchange.
**/
export class ObCurrencyExchange5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @Metadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount?: ObCurrencyExchange5InstructedAmount;

  @Metadata({ data: "json, name=QuotationDate" })
  quotationDate?: Date;

  @Metadata({ data: "json, name=SourceCurrency" })
  sourceCurrency: string;

  @Metadata({ data: "json, name=TargetCurrency" })
  targetCurrency?: string;

  @Metadata({ data: "json, name=UnitCurrency" })
  unitCurrency?: string;
}
