import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Pad
/** 
 * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
**/
export class Pad extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottomPixels" })
  bottomPixels?: number;

  @Metadata({ data: "json, name=leftPixels" })
  leftPixels?: number;

  @Metadata({ data: "json, name=rightPixels" })
  rightPixels?: number;

  @Metadata({ data: "json, name=topPixels" })
  topPixels?: number;
}
