import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyle } from "./textstyle";


// Bullet
/** 
 * Describes the bullet of a paragraph.
**/
export class Bullet extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletStyle" })
  bulletStyle?: TextStyle;

  @Metadata({ data: "json, name=glyph" })
  glyph?: string;

  @Metadata({ data: "json, name=listId" })
  listId?: string;

  @Metadata({ data: "json, name=nestingLevel" })
  nestingLevel?: number;
}
