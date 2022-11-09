import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsableSubnetworkSecondaryRange } from "./usablesubnetworksecondaryrange";


// UsableSubnetwork
/** 
 * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
**/
export class UsableSubnetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=secondaryIpRanges", elemType: shared.UsableSubnetworkSecondaryRange })
  secondaryIpRanges?: UsableSubnetworkSecondaryRange[];

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
