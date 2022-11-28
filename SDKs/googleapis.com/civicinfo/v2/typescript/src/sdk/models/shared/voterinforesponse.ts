import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contest } from "./contest";
import { PollingLocation } from "./pollinglocation";
import { Election } from "./election";
import { SimpleAddressType } from "./simpleaddresstype";
import { Precinct } from "./precinct";
import { AdministrationRegion } from "./administrationregion";



// VoterInfoResponse
/** 
 * The result of a voter info lookup query.
**/
export class VoterInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contests", elemType: Contest })
  contests?: Contest[];

  @SpeakeasyMetadata({ data: "json, name=dropOffLocations", elemType: PollingLocation })
  dropOffLocations?: PollingLocation[];

  @SpeakeasyMetadata({ data: "json, name=earlyVoteSites", elemType: PollingLocation })
  earlyVoteSites?: PollingLocation[];

  @SpeakeasyMetadata({ data: "json, name=election" })
  election?: Election;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mailOnly" })
  mailOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=normalizedInput" })
  normalizedInput?: SimpleAddressType;

  @SpeakeasyMetadata({ data: "json, name=otherElections", elemType: Election })
  otherElections?: Election[];

  @SpeakeasyMetadata({ data: "json, name=pollingLocations", elemType: PollingLocation })
  pollingLocations?: PollingLocation[];

  @SpeakeasyMetadata({ data: "json, name=precinctId" })
  precinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=precincts", elemType: Precinct })
  precincts?: Precinct[];

  @SpeakeasyMetadata({ data: "json, name=state", elemType: AdministrationRegion })
  state?: AdministrationRegion[];
}
