import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoMetadata } from "./videometadata";


// VideoContent
/** 
 * Video content for a creative.
**/
export class VideoContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoMetadata" })
  videoMetadata?: VideoMetadata;

  @Metadata({ data: "json, name=videoUrl" })
  videoUrl?: string;

  @Metadata({ data: "json, name=videoVastXml" })
  videoVastXml?: string;
}
