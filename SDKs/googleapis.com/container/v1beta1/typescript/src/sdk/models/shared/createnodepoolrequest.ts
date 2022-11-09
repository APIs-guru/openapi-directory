import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePool } from "./nodepool";


// CreateNodePoolRequest
/** 
 * CreateNodePoolRequest creates a node pool for a cluster.
**/
export class CreateNodePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=nodePool" })
  nodePool?: NodePool;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
