import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExchangeRateInformation1RateTypeEnum {
    Spot = "SPOT",
    Sale = "SALE",
    Agrd = "AGRD"
}


// ExchangeRateInformation1
/** 
 * as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1
**/
export class ExchangeRateInformation1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=exchangeRate" })
  exchangeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=rateType" })
  rateType?: ExchangeRateInformation1RateTypeEnum;
}
