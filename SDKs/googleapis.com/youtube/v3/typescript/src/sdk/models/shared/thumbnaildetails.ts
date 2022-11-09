import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Thumbnail } from "./thumbnail";
import { Thumbnail } from "./thumbnail";
import { Thumbnail } from "./thumbnail";
import { Thumbnail } from "./thumbnail";


// ThumbnailDetails
/** 
 * Internal representation of thumbnails for a YouTube resource.
**/
export class ThumbnailDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=high" })
  high?: Thumbnail;

  @Metadata({ data: "json, name=maxres" })
  maxres?: Thumbnail;

  @Metadata({ data: "json, name=medium" })
  medium?: Thumbnail;

  @Metadata({ data: "json, name=standard" })
  standard?: Thumbnail;
}
