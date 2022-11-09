import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnimationEnd
/** 
 * End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
**/
export class AnimationEnd extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
