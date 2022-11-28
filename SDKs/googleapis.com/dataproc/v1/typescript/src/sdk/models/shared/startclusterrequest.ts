import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartClusterRequest
/** 
 * A request to start a cluster.
**/
export class StartClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
