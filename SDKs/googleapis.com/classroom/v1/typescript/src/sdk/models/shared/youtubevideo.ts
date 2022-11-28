import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YouTubeVideo
/** 
 * YouTube video item.
**/
export class YouTubeVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
