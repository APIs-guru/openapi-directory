import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnthosCluster
/** 
 * Information specifying an Anthos Cluster.
**/
export class AnthosCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=membership" })
  membership?: string;
}
