import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleAddressType } from "./simpleaddresstype";
import { ElectionOfficial } from "./electionofficial";
import { SimpleAddressType } from "./simpleaddresstype";


// AdministrativeBody
/** 
 * Information about an election administrative body (e.g. County Board of Elections).
**/
export class AdministrativeBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=absenteeVotingInfoUrl" })
  absenteeVotingInfoUrl?: string;

  @Metadata({ data: "json, name=ballotInfoUrl" })
  ballotInfoUrl?: string;

  @Metadata({ data: "json, name=correspondenceAddress" })
  correspondenceAddress?: SimpleAddressType;

  @Metadata({ data: "json, name=electionInfoUrl" })
  electionInfoUrl?: string;

  @Metadata({ data: "json, name=electionNoticeText" })
  electionNoticeText?: string;

  @Metadata({ data: "json, name=electionNoticeUrl" })
  electionNoticeUrl?: string;

  @Metadata({ data: "json, name=electionOfficials", elemType: shared.ElectionOfficial })
  electionOfficials?: ElectionOfficial[];

  @Metadata({ data: "json, name=electionRegistrationConfirmationUrl" })
  electionRegistrationConfirmationUrl?: string;

  @Metadata({ data: "json, name=electionRegistrationUrl" })
  electionRegistrationUrl?: string;

  @Metadata({ data: "json, name=electionRulesUrl" })
  electionRulesUrl?: string;

  @Metadata({ data: "json, name=hoursOfOperation" })
  hoursOfOperation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=physicalAddress" })
  physicalAddress?: SimpleAddressType;

  @Metadata({ data: "json, name=voter_services" })
  voterServices?: string[];

  @Metadata({ data: "json, name=votingLocationFinderUrl" })
  votingLocationFinderUrl?: string;
}
