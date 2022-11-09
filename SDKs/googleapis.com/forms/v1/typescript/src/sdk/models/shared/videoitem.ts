import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Video } from "./video";


// VideoItem
/** 
 * An item containing a video.
**/
export class VideoItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=video" })
  video?: Video;
}
