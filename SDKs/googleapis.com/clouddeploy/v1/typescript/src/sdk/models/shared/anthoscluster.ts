import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnthosCluster
/** 
 * Information specifying an Anthos Cluster.
**/
export class AnthosCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: string;
}
