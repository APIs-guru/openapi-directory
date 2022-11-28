import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterInput } from "./cluster";



// CreateClusterRequestInput
/** 
 * CreateClusterRequest creates a cluster.
**/
export class CreateClusterRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: ClusterInput;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
