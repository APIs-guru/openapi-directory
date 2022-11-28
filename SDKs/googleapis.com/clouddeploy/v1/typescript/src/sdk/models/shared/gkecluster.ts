import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeCluster
/** 
 * Information specifying a GKE Cluster.
**/
export class GkeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: boolean;
}
