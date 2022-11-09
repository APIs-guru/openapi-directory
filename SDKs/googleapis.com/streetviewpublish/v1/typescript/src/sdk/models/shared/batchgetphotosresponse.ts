import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PhotoResponse } from "./photoresponse";


// BatchGetPhotosResponse
/** 
 * Response to batch get of Photos.
**/
export class BatchGetPhotosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.PhotoResponse })
  results?: PhotoResponse[];
}
