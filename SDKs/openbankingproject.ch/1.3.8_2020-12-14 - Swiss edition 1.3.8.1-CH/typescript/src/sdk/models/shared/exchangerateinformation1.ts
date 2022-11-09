import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExchangeRateInformation1RateTypeEnum {
    Spot = "SPOT"
,    Sale = "SALE"
,    Agrd = "AGRD"
}


// ExchangeRateInformation1
/** 
 * as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1
**/
export class ExchangeRateInformation1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=contractIdentification" })
  contractIdentification?: string;

  @Metadata({ data: "json, name=exchangeRate" })
  exchangeRate?: string;

  @Metadata({ data: "json, name=rateType" })
  rateType?: ExchangeRateInformation1RateTypeEnum;
}
