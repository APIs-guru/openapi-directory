import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTypeEnum } from "./imagetypeenum";


// ImageProviderInfo
/** 
 * Class ImageProviderInfo.
**/
export class ImageProviderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SupportedImages" })
  supportedImages?: ImageTypeEnum[];
}
