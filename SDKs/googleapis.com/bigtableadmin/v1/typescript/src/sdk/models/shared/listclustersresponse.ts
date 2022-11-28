import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// ListClustersResponse
/** 
 * Response message for BigtableInstanceAdmin.ListClusters.
**/
export class ListClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
