import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// ListClustersResponse
/** 
 * The list of all clusters in a project.
**/
export class ListClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
