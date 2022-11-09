import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Connection
/** 
 * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=peering" })
  peering?: string;

  @Metadata({ data: "json, name=reservedPeeringRanges" })
  reservedPeeringRanges?: string[];

  @Metadata({ data: "json, name=service" })
  service?: string;
}
