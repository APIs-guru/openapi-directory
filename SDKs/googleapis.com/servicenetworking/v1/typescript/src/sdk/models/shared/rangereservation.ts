import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnetwork } from "./subnetwork";



// RangeReservation
/** 
 * Represents a range reservation.
**/
export class RangeReservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=requestedRanges" })
  requestedRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=secondaryRangeIpPrefixLengths" })
  secondaryRangeIpPrefixLengths?: number[];

  @SpeakeasyMetadata({ data: "json, name=subnetworkCandidates", elemType: Subnetwork })
  subnetworkCandidates?: Subnetwork[];
}
