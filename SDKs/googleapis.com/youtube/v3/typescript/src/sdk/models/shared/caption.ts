import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaptionSnippet } from "./captionsnippet";


// Caption
/** 
 * A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
**/
export class Caption extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: CaptionSnippet;
}
