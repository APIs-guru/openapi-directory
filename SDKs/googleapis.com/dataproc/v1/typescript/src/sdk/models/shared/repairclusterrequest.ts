import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodePool } from "./nodepool";


// RepairClusterRequest
/** 
 * A request to repair a cluster.
**/
export class RepairClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=gracefulDecommissionTimeout" })
  gracefulDecommissionTimeout?: string;

  @Metadata({ data: "json, name=nodePools", elemType: shared.NodePool })
  nodePools?: NodePool[];

  @Metadata({ data: "json, name=parentOperationId" })
  parentOperationId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
