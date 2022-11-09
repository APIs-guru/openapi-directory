import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";


// BatchDeletePhotosResponse
/** 
 * Response to batch delete of one or more Photos.
**/
export class BatchDeletePhotosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status", elemType: shared.Status })
  status?: Status[];
}
