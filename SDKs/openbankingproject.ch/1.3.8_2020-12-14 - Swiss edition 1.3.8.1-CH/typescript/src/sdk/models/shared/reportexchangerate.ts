import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportExchangeRate
/** 
 * Exchange Rate.
**/
export class ReportExchangeRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=contractIdentification" })
  contractIdentification?: string;

  @Metadata({ data: "json, name=exchangeRate" })
  exchangeRate: string;

  @Metadata({ data: "json, name=quotationDate" })
  quotationDate: Date;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency: string;

  @Metadata({ data: "json, name=targetCurrency" })
  targetCurrency: string;

  @Metadata({ data: "json, name=unitCurrency" })
  unitCurrency: string;
}
