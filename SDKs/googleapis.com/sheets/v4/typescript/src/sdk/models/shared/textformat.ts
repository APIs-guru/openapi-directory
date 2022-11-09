import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Link } from "./link";


// TextFormat
/** 
 * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
**/
export class TextFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @Metadata({ data: "json, name=fontSize" })
  fontSize?: number;

  @Metadata({ data: "json, name=foregroundColor" })
  foregroundColor?: Color;

  @Metadata({ data: "json, name=foregroundColorStyle" })
  foregroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=italic" })
  italic?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=underline" })
  underline?: boolean;
}
