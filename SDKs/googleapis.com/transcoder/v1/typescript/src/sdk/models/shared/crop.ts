import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Crop
/** 
 * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
**/
export class Crop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomPixels" })
  bottomPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=leftPixels" })
  leftPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=rightPixels" })
  rightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=topPixels" })
  topPixels?: number;
}
