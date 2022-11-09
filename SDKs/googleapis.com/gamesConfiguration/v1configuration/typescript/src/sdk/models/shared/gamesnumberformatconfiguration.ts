import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GamesNumberAffixConfiguration } from "./gamesnumberaffixconfiguration";

export enum GamesNumberFormatConfigurationNumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
,    Numeric = "NUMERIC"
,    TimeDuration = "TIME_DURATION"
,    Currency = "CURRENCY"
}


// GamesNumberFormatConfiguration
/** 
 * A number format resource.
**/
export class GamesNumberFormatConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=numDecimalPlaces" })
  numDecimalPlaces?: number;

  @Metadata({ data: "json, name=numberFormatType" })
  numberFormatType?: GamesNumberFormatConfigurationNumberFormatTypeEnum;

  @Metadata({ data: "json, name=suffix" })
  suffix?: GamesNumberAffixConfiguration;
}
