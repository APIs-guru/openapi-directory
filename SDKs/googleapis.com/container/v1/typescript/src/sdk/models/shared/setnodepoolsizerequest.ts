import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetNodePoolSizeRequest
/** 
 * SetNodePoolSizeRequest sets the size of a node pool.
**/
export class SetNodePoolSizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
