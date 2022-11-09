import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeCluster
/** 
 * Information specifying a GKE Cluster.
**/
export class GkeCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: boolean;
}
