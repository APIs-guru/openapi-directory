import { SpeakeasyBase } from "../../../internal/utils";
import { GamesNumberAffixConfiguration } from "./gamesnumberaffixconfiguration";
export declare enum GamesNumberFormatConfigurationNumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    Numeric = "NUMERIC",
    TimeDuration = "TIME_DURATION",
    Currency = "CURRENCY"
}
/**
 * A number format resource.
**/
export declare class GamesNumberFormatConfiguration extends SpeakeasyBase {
    currencyCode?: string;
    numDecimalPlaces?: number;
    numberFormatType?: GamesNumberFormatConfigurationNumberFormatTypeEnum;
    suffix?: GamesNumberAffixConfiguration;
}
