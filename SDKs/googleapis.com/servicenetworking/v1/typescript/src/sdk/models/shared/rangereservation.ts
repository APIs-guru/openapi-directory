import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subnetwork } from "./subnetwork";


// RangeReservation
/** 
 * Represents a range reservation.
**/
export class RangeReservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=requestedRanges" })
  requestedRanges?: string[];

  @Metadata({ data: "json, name=secondaryRangeIpPrefixLengths" })
  secondaryRangeIpPrefixLengths?: number[];

  @Metadata({ data: "json, name=subnetworkCandidates", elemType: shared.Subnetwork })
  subnetworkCandidates?: Subnetwork[];
}
