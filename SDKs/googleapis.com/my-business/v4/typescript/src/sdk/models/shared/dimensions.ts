import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimensions
/** 
 * Dimensions of the media item.
**/
export class Dimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
