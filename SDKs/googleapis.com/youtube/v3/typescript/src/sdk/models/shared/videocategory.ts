import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoCategorySnippet } from "./videocategorysnippet";



// VideoCategory
/** 
 * A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
**/
export class VideoCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: VideoCategorySnippet;
}
