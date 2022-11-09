import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PhotoResponse } from "./photoresponse";


// BatchUpdatePhotosResponse
/** 
 * Response to batch update of metadata of one or more Photos.
**/
export class BatchUpdatePhotosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.PhotoResponse })
  results?: PhotoResponse[];
}
