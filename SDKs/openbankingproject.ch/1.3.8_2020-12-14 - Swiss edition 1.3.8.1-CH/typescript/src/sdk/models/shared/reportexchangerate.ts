import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportExchangeRate
/** 
 * Exchange Rate.
**/
export class ReportExchangeRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=exchangeRate" })
  exchangeRate: string;

  @SpeakeasyMetadata({ data: "json, name=quotationDate" })
  quotationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=targetCurrency" })
  targetCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=unitCurrency" })
  unitCurrency: string;
}
