import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";



// ImageProviderInfo
/** 
 * Class ImageProviderInfo.
**/
export class ImageProviderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedImages" })
  supportedImages?: ImageTypeEnum[];
}
