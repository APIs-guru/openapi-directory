import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnimationEnd
/** 
 * End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
**/
export class AnimationEnd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
