import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopClusterRequest
/** 
 * A request to stop a cluster.
**/
export class StopClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
