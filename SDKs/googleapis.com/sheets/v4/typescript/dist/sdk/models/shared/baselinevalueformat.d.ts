import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";
export declare enum BaselineValueFormatComparisonTypeEnum {
    ComparisonTypeUndefined = "COMPARISON_TYPE_UNDEFINED",
    AbsoluteDifference = "ABSOLUTE_DIFFERENCE",
    PercentageDifference = "PERCENTAGE_DIFFERENCE"
}
/**
 * Formatting options for baseline value.
**/
export declare class BaselineValueFormat extends SpeakeasyBase {
    comparisonType?: BaselineValueFormatComparisonTypeEnum;
    description?: string;
    negativeColor?: Color;
    negativeColorStyle?: ColorStyle;
    position?: TextPosition;
    positiveColor?: Color;
    positiveColorStyle?: ColorStyle;
    textFormat?: TextFormat;
}
