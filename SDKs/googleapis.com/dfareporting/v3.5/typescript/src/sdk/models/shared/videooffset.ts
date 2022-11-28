import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoOffset
/** 
 * Video Offset
**/
export class VideoOffset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offsetPercentage" })
  offsetPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetSeconds" })
  offsetSeconds?: number;
}
