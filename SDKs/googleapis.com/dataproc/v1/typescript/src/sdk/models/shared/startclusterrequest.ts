import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartClusterRequest
/** 
 * A request to start a cluster.
**/
export class StartClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
