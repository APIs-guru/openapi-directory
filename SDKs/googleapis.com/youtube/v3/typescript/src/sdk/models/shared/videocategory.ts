import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoCategorySnippet } from "./videocategorysnippet";


// VideoCategory
/** 
 * A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
**/
export class VideoCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: VideoCategorySnippet;
}
