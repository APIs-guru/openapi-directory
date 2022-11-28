import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GamesNumberAffixConfiguration } from "./gamesnumberaffixconfiguration";


export enum GamesNumberFormatConfigurationNumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    Numeric = "NUMERIC",
    TimeDuration = "TIME_DURATION",
    Currency = "CURRENCY"
}


// GamesNumberFormatConfiguration
/** 
 * A number format resource.
**/
export class GamesNumberFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=numDecimalPlaces" })
  numDecimalPlaces?: number;

  @SpeakeasyMetadata({ data: "json, name=numberFormatType" })
  numberFormatType?: GamesNumberFormatConfigurationNumberFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: GamesNumberAffixConfiguration;
}
