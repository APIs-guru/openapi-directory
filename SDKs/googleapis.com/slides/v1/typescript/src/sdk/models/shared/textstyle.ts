import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
import { OptionalColor } from "./optionalcolor";
import { Link } from "./link";
import { WeightedFontFamily } from "./weightedfontfamily";

export enum TextStyleBaselineOffsetEnum {
    BaselineOffsetUnspecified = "BASELINE_OFFSET_UNSPECIFIED"
,    None = "NONE"
,    Superscript = "SUPERSCRIPT"
,    Subscript = "SUBSCRIPT"
}


// TextStyle
/** 
 * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
**/
export class TextStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;

  @Metadata({ data: "json, name=baselineOffset" })
  baselineOffset?: TextStyleBaselineOffsetEnum;

  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @Metadata({ data: "json, name=fontSize" })
  fontSize?: Dimension;

  @Metadata({ data: "json, name=foregroundColor" })
  foregroundColor?: OptionalColor;

  @Metadata({ data: "json, name=italic" })
  italic?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=smallCaps" })
  smallCaps?: boolean;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=underline" })
  underline?: boolean;

  @Metadata({ data: "json, name=weightedFontFamily" })
  weightedFontFamily?: WeightedFontFamily;
}
