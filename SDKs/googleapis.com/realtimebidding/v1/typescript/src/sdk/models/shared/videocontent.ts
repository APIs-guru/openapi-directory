import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoMetadata } from "./videometadata";



// VideoContent
/** 
 * Video content for a creative.
**/
export class VideoContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoMetadata" })
  videoMetadata?: VideoMetadata;

  @SpeakeasyMetadata({ data: "json, name=videoUrl" })
  videoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=videoVastXml" })
  videoVastXml?: string;
}
