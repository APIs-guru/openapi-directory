import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Pad
/** 
 * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
**/
export class Pad extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomPixels" })
  bottomPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=leftPixels" })
  leftPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=rightPixels" })
  rightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=topPixels" })
  topPixels?: number;
}
