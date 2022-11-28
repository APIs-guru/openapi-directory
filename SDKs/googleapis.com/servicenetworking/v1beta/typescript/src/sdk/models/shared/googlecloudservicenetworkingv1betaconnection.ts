import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicenetworkingV1betaConnection
/** 
 * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
**/
export class GoogleCloudServicenetworkingV1betaConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=peering" })
  peering?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedPeeringRanges" })
  reservedPeeringRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
