import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// YouTubeVideo
/** 
 * YouTube video item.
**/
export class YouTubeVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
