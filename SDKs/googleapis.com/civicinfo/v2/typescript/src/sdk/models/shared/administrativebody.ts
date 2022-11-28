import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { ElectionOfficial } from "./electionofficial";



// AdministrativeBody
/** 
 * Information about an election administrative body (e.g. County Board of Elections).
**/
export class AdministrativeBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absenteeVotingInfoUrl" })
  absenteeVotingInfoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ballotInfoUrl" })
  ballotInfoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=correspondenceAddress" })
  correspondenceAddress?: SimpleAddressType;

  @SpeakeasyMetadata({ data: "json, name=electionInfoUrl" })
  electionInfoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=electionNoticeText" })
  electionNoticeText?: string;

  @SpeakeasyMetadata({ data: "json, name=electionNoticeUrl" })
  electionNoticeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=electionOfficials", elemType: ElectionOfficial })
  electionOfficials?: ElectionOfficial[];

  @SpeakeasyMetadata({ data: "json, name=electionRegistrationConfirmationUrl" })
  electionRegistrationConfirmationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=electionRegistrationUrl" })
  electionRegistrationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=electionRulesUrl" })
  electionRulesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hoursOfOperation" })
  hoursOfOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalAddress" })
  physicalAddress?: SimpleAddressType;

  @SpeakeasyMetadata({ data: "json, name=voter_services" })
  voterServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=votingLocationFinderUrl" })
  votingLocationFinderUrl?: string;
}
