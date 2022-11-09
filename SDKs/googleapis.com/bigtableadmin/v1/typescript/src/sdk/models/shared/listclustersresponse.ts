import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";


// ListClustersResponse
/** 
 * Response message for BigtableInstanceAdmin.ListClusters.
**/
export class ListClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
