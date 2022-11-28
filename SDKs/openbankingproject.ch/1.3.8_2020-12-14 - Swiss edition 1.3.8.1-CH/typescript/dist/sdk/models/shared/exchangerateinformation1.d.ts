import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExchangeRateInformation1RateTypeEnum {
    Spot = "SPOT",
    Sale = "SALE",
    Agrd = "AGRD"
}
/**
 * as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1
**/
export declare class ExchangeRateInformation1 extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: string;
    rateType?: ExchangeRateInformation1RateTypeEnum;
}
