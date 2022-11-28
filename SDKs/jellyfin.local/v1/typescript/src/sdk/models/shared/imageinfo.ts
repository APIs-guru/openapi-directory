import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";



// ImageInfo
/** 
 * Class ImageInfo.
**/
export class ImageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlurHash" })
  blurHash?: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageIndex" })
  imageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageTag" })
  imageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageType" })
  imageType?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
