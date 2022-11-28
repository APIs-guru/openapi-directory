import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecondaryIpRange } from "./secondaryiprange";



// Subnetwork
/** 
 * Represents a subnet that was created or discovered by a private access management service.
**/
export class Subnetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=outsideAllocation" })
  outsideAllocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryIpRanges", elemType: SecondaryIpRange })
  secondaryIpRanges?: SecondaryIpRange[];
}
