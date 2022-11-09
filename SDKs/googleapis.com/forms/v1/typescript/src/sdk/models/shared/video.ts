import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaProperties } from "./mediaproperties";


// Video
/** 
 * Data representing a video.
**/
export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: MediaProperties;

  @Metadata({ data: "json, name=youtubeUri" })
  youtubeUri?: string;
}
