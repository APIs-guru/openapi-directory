import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanCondition } from "./booleancondition";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


// FilterCriteria
/** 
 * Criteria for showing/hiding rows in a filter or filter view.
**/
export class FilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @Metadata({ data: "json, name=hiddenValues" })
  hiddenValues?: string[];

  @Metadata({ data: "json, name=visibleBackgroundColor" })
  visibleBackgroundColor?: Color;

  @Metadata({ data: "json, name=visibleBackgroundColorStyle" })
  visibleBackgroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=visibleForegroundColor" })
  visibleForegroundColor?: Color;

  @Metadata({ data: "json, name=visibleForegroundColorStyle" })
  visibleForegroundColorStyle?: ColorStyle;
}
