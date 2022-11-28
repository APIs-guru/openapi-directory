import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
import { Link } from "./link";
import { WeightedFontFamily } from "./weightedfontfamily";


export enum TextStyleBaselineOffsetEnum {
    BaselineOffsetUnspecified = "BASELINE_OFFSET_UNSPECIFIED",
    None = "NONE",
    Superscript = "SUPERSCRIPT",
    Subscript = "SUBSCRIPT"
}


// TextStyle
/** 
 * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
**/
export class TextStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=baselineOffset" })
  baselineOffset?: TextStyleBaselineOffsetEnum;

  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=foregroundColor" })
  foregroundColor?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=italic" })
  italic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=smallCaps" })
  smallCaps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underline" })
  underline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weightedFontFamily" })
  weightedFontFamily?: WeightedFontFamily;
}
