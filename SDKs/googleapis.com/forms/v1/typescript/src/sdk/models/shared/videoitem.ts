import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";



// VideoItem
/** 
 * An item containing a video.
**/
export class VideoItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: Video;
}
