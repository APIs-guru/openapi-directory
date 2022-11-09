import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoContentDetailsRegionRestriction
/** 
 * DEPRECATED Region restriction of the video.
**/
export class VideoContentDetailsRegionRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed" })
  allowed?: string[];

  @Metadata({ data: "json, name=blocked" })
  blocked?: string[];
}
