import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


// FeatureDescription
/** 
 * A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
**/
export class FeatureDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=headline" })
  headline?: string;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
