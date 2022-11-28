import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ParagraphStyle } from "./paragraphstyle";



// ParagraphMarker
/** 
 * A TextElement kind that represents the beginning of a new paragraph.
**/
export class ParagraphMarker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: ParagraphStyle;
}
