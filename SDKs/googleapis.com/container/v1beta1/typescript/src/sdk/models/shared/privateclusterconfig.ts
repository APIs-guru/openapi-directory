import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateClusterMasterGlobalAccessConfig } from "./privateclustermasterglobalaccessconfig";



// PrivateClusterConfig
/** 
 * Configuration options for private clusters.
**/
export class PrivateClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enablePrivateEndpoint" })
  enablePrivateEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePrivateNodes" })
  enablePrivateNodes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=masterGlobalAccessConfig" })
  masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=peeringName" })
  peeringName?: string;

  @SpeakeasyMetadata({ data: "json, name=privateEndpoint" })
  privateEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=privateEndpointSubnetwork" })
  privateEndpointSubnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: string;
}
