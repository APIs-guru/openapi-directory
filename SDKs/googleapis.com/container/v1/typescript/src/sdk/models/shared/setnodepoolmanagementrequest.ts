import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeManagement } from "./nodemanagement";


// SetNodePoolManagementRequest
/** 
 * SetNodePoolManagementRequest sets the node management properties of a node pool.
**/
export class SetNodePoolManagementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=management" })
  management?: NodeManagement;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
