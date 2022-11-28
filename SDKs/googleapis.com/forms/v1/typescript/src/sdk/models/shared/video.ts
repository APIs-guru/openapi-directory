import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaProperties } from "./mediaproperties";



// Video
/** 
 * Data representing a video.
**/
export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: MediaProperties;

  @SpeakeasyMetadata({ data: "json, name=youtubeUri" })
  youtubeUri?: string;
}
