import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contest } from "./contest";
import { PollingLocation } from "./pollinglocation";
import { PollingLocation } from "./pollinglocation";
import { Election } from "./election";
import { SimpleAddressType } from "./simpleaddresstype";
import { Election } from "./election";
import { PollingLocation } from "./pollinglocation";
import { Precinct } from "./precinct";
import { AdministrationRegion } from "./administrationregion";


// VoterInfoResponse
/** 
 * The result of a voter info lookup query.
**/
export class VoterInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contests", elemType: shared.Contest })
  contests?: Contest[];

  @Metadata({ data: "json, name=dropOffLocations", elemType: shared.PollingLocation })
  dropOffLocations?: PollingLocation[];

  @Metadata({ data: "json, name=earlyVoteSites", elemType: shared.PollingLocation })
  earlyVoteSites?: PollingLocation[];

  @Metadata({ data: "json, name=election" })
  election?: Election;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mailOnly" })
  mailOnly?: boolean;

  @Metadata({ data: "json, name=normalizedInput" })
  normalizedInput?: SimpleAddressType;

  @Metadata({ data: "json, name=otherElections", elemType: shared.Election })
  otherElections?: Election[];

  @Metadata({ data: "json, name=pollingLocations", elemType: shared.PollingLocation })
  pollingLocations?: PollingLocation[];

  @Metadata({ data: "json, name=precinctId" })
  precinctId?: string;

  @Metadata({ data: "json, name=precincts", elemType: shared.Precinct })
  precincts?: Precinct[];

  @Metadata({ data: "json, name=state", elemType: shared.AdministrationRegion })
  state?: AdministrationRegion[];
}
