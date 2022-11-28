import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoContentDetailsRegionRestriction
/** 
 * DEPRECATED Region restriction of the video.
**/
export class VideoContentDetailsRegionRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: string[];

  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: string[];
}
