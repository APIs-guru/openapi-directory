import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// ListStepThumbnailsResponse
/** 
 * A response containing the thumbnails in a step.
**/
export class ListStepThumbnailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnails", elemType: Image })
  thumbnails?: Image[];
}
