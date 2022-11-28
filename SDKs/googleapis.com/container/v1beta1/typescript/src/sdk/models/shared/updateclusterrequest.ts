import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterUpdate } from "./clusterupdate";



// UpdateClusterRequest
/** 
 * UpdateClusterRequest updates the settings of a cluster.
**/
export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: ClusterUpdate;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
