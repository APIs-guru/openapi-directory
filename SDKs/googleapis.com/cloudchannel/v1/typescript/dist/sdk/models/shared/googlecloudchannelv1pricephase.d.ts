import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PriceTier } from "./googlecloudchannelv1pricetier";
export declare enum GoogleCloudChannelV1PricePhasePeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
**/
export declare class GoogleCloudChannelV1PricePhase extends SpeakeasyBase {
    firstPeriod?: number;
    lastPeriod?: number;
    periodType?: GoogleCloudChannelV1PricePhasePeriodTypeEnum;
    price?: GoogleCloudChannelV1Price;
    priceTiers?: GoogleCloudChannelV1PriceTier[];
}
