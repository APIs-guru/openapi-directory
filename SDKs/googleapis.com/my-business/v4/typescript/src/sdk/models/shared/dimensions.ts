import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimensions
/** 
 * Dimensions of the media item.
**/
export class Dimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
