import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Link } from "./link";



// TextFormat
/** 
 * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
**/
export class TextFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: number;

  @SpeakeasyMetadata({ data: "json, name=foregroundColor" })
  foregroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=foregroundColorStyle" })
  foregroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=italic" })
  italic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underline" })
  underline?: boolean;
}
