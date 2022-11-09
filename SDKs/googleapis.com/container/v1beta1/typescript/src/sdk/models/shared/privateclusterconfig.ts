import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateClusterMasterGlobalAccessConfig } from "./privateclustermasterglobalaccessconfig";


// PrivateClusterConfig
/** 
 * Configuration options for private clusters.
**/
export class PrivateClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enablePrivateEndpoint" })
  enablePrivateEndpoint?: boolean;

  @Metadata({ data: "json, name=enablePrivateNodes" })
  enablePrivateNodes?: boolean;

  @Metadata({ data: "json, name=masterGlobalAccessConfig" })
  masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;

  @Metadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=peeringName" })
  peeringName?: string;

  @Metadata({ data: "json, name=privateEndpoint" })
  privateEndpoint?: string;

  @Metadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: string;
}
