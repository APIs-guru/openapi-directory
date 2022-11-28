import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetworkSecondaryRange } from "./usablesubnetworksecondaryrange";



// UsableSubnetwork
/** 
 * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
**/
export class UsableSubnetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryIpRanges", elemType: UsableSubnetworkSecondaryRange })
  secondaryIpRanges?: UsableSubnetworkSecondaryRange[];

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
