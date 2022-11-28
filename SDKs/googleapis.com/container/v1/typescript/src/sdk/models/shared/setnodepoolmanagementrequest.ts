import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";



// SetNodePoolManagementRequest
/** 
 * SetNodePoolManagementRequest sets the node management properties of a node pool.
**/
export class SetNodePoolManagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=management" })
  management?: NodeManagement;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
