import { SpeakeasyBase } from "../../../internal/utils";
import { Subnetwork } from "./subnetwork";
/**
 * Represents a range reservation.
**/
export declare class RangeReservation extends SpeakeasyBase {
    ipPrefixLength?: number;
    requestedRanges?: string[];
    secondaryRangeIpPrefixLengths?: number[];
    subnetworkCandidates?: Subnetwork[];
}
