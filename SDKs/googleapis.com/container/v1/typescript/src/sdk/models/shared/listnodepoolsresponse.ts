import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodePool } from "./nodepool";


// ListNodePoolsResponse
/** 
 * ListNodePoolsResponse is the result of ListNodePoolsRequest.
**/
export class ListNodePoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodePools", elemType: shared.NodePool })
  nodePools?: NodePool[];
}
