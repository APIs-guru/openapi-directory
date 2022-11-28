import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// BatchDeletePhotosResponse
/** 
 * Response to batch delete of one or more Photos.
**/
export class BatchDeletePhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status", elemType: Status })
  status?: Status[];
}
