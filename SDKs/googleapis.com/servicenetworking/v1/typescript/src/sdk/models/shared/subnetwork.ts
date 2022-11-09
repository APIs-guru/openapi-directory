import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecondaryIpRange } from "./secondaryiprange";


// Subnetwork
/** 
 * Represents a subnet that was created or discovered by a private access management service.
**/
export class Subnetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=outsideAllocation" })
  outsideAllocation?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=secondaryIpRanges", elemType: shared.SecondaryIpRange })
  secondaryIpRanges?: SecondaryIpRange[];
}
