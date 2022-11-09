import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetNodePoolSizeRequest
/** 
 * SetNodePoolSizeRequest sets the size of a node pool.
**/
export class SetNodePoolSizeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @Metadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
