import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterUpdate } from "./clusterupdate";


// UpdateClusterRequest
/** 
 * UpdateClusterRequest updates the settings of a cluster.
**/
export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=update" })
  update?: ClusterUpdate;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
