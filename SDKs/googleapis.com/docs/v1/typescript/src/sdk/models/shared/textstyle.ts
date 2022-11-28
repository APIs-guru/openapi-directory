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
 * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
**/
export class TextStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=baselineOffset" })
  baselineOffset?: TextStyleBaselineOffsetEnum;

  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

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
