import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoOffset
/** 
 * Video Offset
**/
export class VideoOffset extends SpeakeasyBase {
  @Metadata({ data: "json, name=offsetPercentage" })
  offsetPercentage?: number;

  @Metadata({ data: "json, name=offsetSeconds" })
  offsetSeconds?: number;
}
