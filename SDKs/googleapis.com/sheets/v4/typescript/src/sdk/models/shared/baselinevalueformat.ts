import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextPosition } from "./textposition";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextFormat } from "./textformat";

export enum BaselineValueFormatComparisonTypeEnum {
    ComparisonTypeUndefined = "COMPARISON_TYPE_UNDEFINED"
,    AbsoluteDifference = "ABSOLUTE_DIFFERENCE"
,    PercentageDifference = "PERCENTAGE_DIFFERENCE"
}


// BaselineValueFormat
/** 
 * Formatting options for baseline value.
**/
export class BaselineValueFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonType" })
  comparisonType?: BaselineValueFormatComparisonTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=negativeColor" })
  negativeColor?: Color;

  @Metadata({ data: "json, name=negativeColorStyle" })
  negativeColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=position" })
  position?: TextPosition;

  @Metadata({ data: "json, name=positiveColor" })
  positiveColor?: Color;

  @Metadata({ data: "json, name=positiveColorStyle" })
  positiveColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
