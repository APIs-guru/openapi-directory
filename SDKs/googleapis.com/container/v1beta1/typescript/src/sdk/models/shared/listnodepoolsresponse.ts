import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";



// ListNodePoolsResponse
/** 
 * ListNodePoolsResponse is the result of ListNodePoolsRequest.
**/
export class ListNodePoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool })
  nodePools?: NodePool[];
}
