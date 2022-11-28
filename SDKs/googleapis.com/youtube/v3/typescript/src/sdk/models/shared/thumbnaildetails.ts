import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Thumbnail } from "./thumbnail";



// ThumbnailDetails
/** 
 * Internal representation of thumbnails for a YouTube resource.
**/
export class ThumbnailDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=maxres" })
  maxres?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: Thumbnail;

  @SpeakeasyMetadata({ data: "json, name=standard" })
  standard?: Thumbnail;
}
