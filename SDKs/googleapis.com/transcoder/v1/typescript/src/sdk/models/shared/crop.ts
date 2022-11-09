import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Crop
/** 
 * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
**/
export class Crop extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottomPixels" })
  bottomPixels?: number;

  @Metadata({ data: "json, name=leftPixels" })
  leftPixels?: number;

  @Metadata({ data: "json, name=rightPixels" })
  rightPixels?: number;

  @Metadata({ data: "json, name=topPixels" })
  topPixels?: number;
}
