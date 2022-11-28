import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
import { Link } from "./link";
import { WeightedFontFamily } from "./weightedfontfamily";
export declare enum TextStyleBaselineOffsetEnum {
    BaselineOffsetUnspecified = "BASELINE_OFFSET_UNSPECIFIED",
    None = "NONE",
    Superscript = "SUPERSCRIPT",
    Subscript = "SUBSCRIPT"
}
/**
 * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
**/
export declare class TextStyle extends SpeakeasyBase {
    backgroundColor?: OptionalColor;
    baselineOffset?: TextStyleBaselineOffsetEnum;
    bold?: boolean;
    fontFamily?: string;
    fontSize?: Dimension;
    foregroundColor?: OptionalColor;
    italic?: boolean;
    link?: Link;
    smallCaps?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    weightedFontFamily?: WeightedFontFamily;
}
