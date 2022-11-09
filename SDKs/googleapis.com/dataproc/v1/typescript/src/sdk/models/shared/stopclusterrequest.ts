import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopClusterRequest
/** 
 * A request to stop a cluster.
**/
export class StopClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
