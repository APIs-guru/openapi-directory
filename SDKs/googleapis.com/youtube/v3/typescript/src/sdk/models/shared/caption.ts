import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptionSnippet } from "./captionsnippet";



// Caption
/** 
 * A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
**/
export class Caption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: CaptionSnippet;
}
