import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimensions
/** 
 * Dimensions.
**/
export class Dimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
