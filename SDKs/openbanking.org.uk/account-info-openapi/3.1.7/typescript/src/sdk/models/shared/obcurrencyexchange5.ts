import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObCurrencyExchange5InstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
**/
export class ObCurrencyExchange5InstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObCurrencyExchange5
/** 
 * Set of elements used to provide details on the currency exchange.
**/
export class ObCurrencyExchange5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount?: ObCurrencyExchange5InstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=QuotationDate" })
  quotationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SourceCurrency" })
  sourceCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=TargetCurrency" })
  targetCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency?: string;
}
