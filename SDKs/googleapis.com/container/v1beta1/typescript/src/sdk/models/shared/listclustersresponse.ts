import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// ListClustersResponse
/** 
 * ListClustersResponse is the result of ListClustersRequest.
**/
export class ListClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=missingZones" })
  missingZones?: string[];
}
