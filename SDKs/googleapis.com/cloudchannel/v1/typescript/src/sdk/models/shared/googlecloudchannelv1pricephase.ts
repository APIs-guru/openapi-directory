import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PriceTier } from "./googlecloudchannelv1pricetier";

export enum GoogleCloudChannelV1PricePhasePeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED"
,    Day = "DAY"
,    Month = "MONTH"
,    Year = "YEAR"
}


// GoogleCloudChannelV1PricePhase
/** 
 * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
**/
export class GoogleCloudChannelV1PricePhase extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstPeriod" })
  firstPeriod?: number;

  @Metadata({ data: "json, name=lastPeriod" })
  lastPeriod?: number;

  @Metadata({ data: "json, name=periodType" })
  periodType?: GoogleCloudChannelV1PricePhasePeriodTypeEnum;

  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudChannelV1Price;

  @Metadata({ data: "json, name=priceTiers", elemType: shared.GoogleCloudChannelV1PriceTier })
  priceTiers?: GoogleCloudChannelV1PriceTier[];
}
