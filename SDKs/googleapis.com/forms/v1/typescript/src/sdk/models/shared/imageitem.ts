import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


// ImageItem
/** 
 * An item containing an image.
**/
export class ImageItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;
}
