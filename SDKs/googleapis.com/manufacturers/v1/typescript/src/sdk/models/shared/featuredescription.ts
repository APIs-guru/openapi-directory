import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// FeatureDescription
/** 
 * A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
**/
export class FeatureDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
