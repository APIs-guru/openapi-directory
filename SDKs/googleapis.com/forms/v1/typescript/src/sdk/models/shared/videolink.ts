import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoLink
/** 
 * Link to a video.
**/
export class VideoLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayText" })
  displayText?: string;

  @Metadata({ data: "json, name=youtubeUri" })
  youtubeUri?: string;
}
