import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";


export enum BaselineValueFormatComparisonTypeEnum {
    ComparisonTypeUndefined = "COMPARISON_TYPE_UNDEFINED",
    AbsoluteDifference = "ABSOLUTE_DIFFERENCE",
    PercentageDifference = "PERCENTAGE_DIFFERENCE"
}


// BaselineValueFormat
/** 
 * Formatting options for baseline value.
**/
export class BaselineValueFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonType" })
  comparisonType?: BaselineValueFormatComparisonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=negativeColor" })
  negativeColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=negativeColorStyle" })
  negativeColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: TextPosition;

  @SpeakeasyMetadata({ data: "json, name=positiveColor" })
  positiveColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=positiveColorStyle" })
  positiveColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
