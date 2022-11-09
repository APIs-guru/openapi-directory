import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTypeEnum } from "./imagetypeenum";


// ImageInfo
/** 
 * Class ImageInfo.
**/
export class ImageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlurHash" })
  blurHash?: string;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=ImageIndex" })
  imageIndex?: number;

  @Metadata({ data: "json, name=ImageTag" })
  imageTag?: string;

  @Metadata({ data: "json, name=ImageType" })
  imageType?: ImageTypeEnum;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
