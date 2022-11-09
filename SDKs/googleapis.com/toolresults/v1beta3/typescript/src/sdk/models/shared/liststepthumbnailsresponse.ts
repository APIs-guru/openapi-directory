import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";


// ListStepThumbnailsResponse
/** 
 * A response containing the thumbnails in a step.
**/
export class ListStepThumbnailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=thumbnails", elemType: shared.Image })
  thumbnails?: Image[];
}
