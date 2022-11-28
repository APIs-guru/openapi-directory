import { SpeakeasyBase } from "../../../internal/utils";
import { Contest } from "./contest";
import { PollingLocation } from "./pollinglocation";
import { Election } from "./election";
import { SimpleAddressType } from "./simpleaddresstype";
import { Precinct } from "./precinct";
import { AdministrationRegion } from "./administrationregion";
/**
 * The result of a voter info lookup query.
**/
export declare class VoterInfoResponse extends SpeakeasyBase {
    contests?: Contest[];
    dropOffLocations?: PollingLocation[];
    earlyVoteSites?: PollingLocation[];
    election?: Election;
    kind?: string;
    mailOnly?: boolean;
    normalizedInput?: SimpleAddressType;
    otherElections?: Election[];
    pollingLocations?: PollingLocation[];
    precinctId?: string;
    precincts?: Precinct[];
    state?: AdministrationRegion[];
}
