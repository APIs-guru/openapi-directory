import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


// CreateClusterRequest
/** 
 * CreateClusterRequest creates a cluster.
**/
export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Cluster;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
