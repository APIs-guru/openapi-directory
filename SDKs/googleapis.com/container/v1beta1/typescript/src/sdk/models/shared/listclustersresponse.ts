import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";


// ListClustersResponse
/** 
 * ListClustersResponse is the result of ListClustersRequest.
**/
export class ListClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=missingZones" })
  missingZones?: string[];
}
