import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";



// FilterCriteria
/** 
 * Criteria for showing/hiding rows in a filter or filter view.
**/
export class FilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @SpeakeasyMetadata({ data: "json, name=hiddenValues" })
  hiddenValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=visibleBackgroundColor" })
  visibleBackgroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=visibleBackgroundColorStyle" })
  visibleBackgroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=visibleForegroundColor" })
  visibleForegroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=visibleForegroundColorStyle" })
  visibleForegroundColorStyle?: ColorStyle;
}
