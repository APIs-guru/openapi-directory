import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
/**
 * Criteria for showing/hiding rows in a filter or filter view.
**/
export declare class FilterCriteria extends SpeakeasyBase {
    condition?: BooleanCondition;
    hiddenValues?: string[];
    visibleBackgroundColor?: Color;
    visibleBackgroundColorStyle?: ColorStyle;
    visibleForegroundColor?: Color;
    visibleForegroundColorStyle?: ColorStyle;
}
