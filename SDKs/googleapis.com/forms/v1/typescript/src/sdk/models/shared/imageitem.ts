import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageInput } from "./image";
import { Image } from "./image";



// ImageItemInput
/** 
 * An item containing an image.
**/
export class ImageItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageInput;
}


// ImageItem
/** 
 * An item containing an image.
**/
export class ImageItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;
}
