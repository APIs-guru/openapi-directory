import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";



// Bullet
/** 
 * Describes the bullet of a paragraph.
**/
export class Bullet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulletStyle" })
  bulletStyle?: TextStyle;

  @SpeakeasyMetadata({ data: "json, name=glyph" })
  glyph?: string;

  @SpeakeasyMetadata({ data: "json, name=listId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=nestingLevel" })
  nestingLevel?: number;
}
