import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";



// RepairClusterRequest
/** 
 * A request to repair a cluster.
**/
export class RepairClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=gracefulDecommissionTimeout" })
  gracefulDecommissionTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool })
  nodePools?: NodePool[];

  @SpeakeasyMetadata({ data: "json, name=parentOperationId" })
  parentOperationId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
