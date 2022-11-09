import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Bullet } from "./bullet";
import { ParagraphStyle } from "./paragraphstyle";


// ParagraphMarker
/** 
 * A TextElement kind that represents the beginning of a new paragraph.
**/
export class ParagraphMarker extends SpeakeasyBase {
  @Metadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @Metadata({ data: "json, name=style" })
  style?: ParagraphStyle;
}
