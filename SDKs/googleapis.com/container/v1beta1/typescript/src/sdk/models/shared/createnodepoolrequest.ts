import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";



// CreateNodePoolRequest
/** 
 * CreateNodePoolRequest creates a node pool for a cluster.
**/
export class CreateNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePool" })
  nodePool?: NodePool;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
