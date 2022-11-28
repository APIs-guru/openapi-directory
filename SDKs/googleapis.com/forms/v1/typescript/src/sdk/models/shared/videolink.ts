import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoLink
/** 
 * Link to a video.
**/
export class VideoLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayText" })
  displayText?: string;

  @SpeakeasyMetadata({ data: "json, name=youtubeUri" })
  youtubeUri?: string;
}
