import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { ElectionOfficial } from "./electionofficial";
/**
 * Information about an election administrative body (e.g. County Board of Elections).
**/
export declare class AdministrativeBody extends SpeakeasyBase {
    absenteeVotingInfoUrl?: string;
    ballotInfoUrl?: string;
    correspondenceAddress?: SimpleAddressType;
    electionInfoUrl?: string;
    electionNoticeText?: string;
    electionNoticeUrl?: string;
    electionOfficials?: ElectionOfficial[];
    electionRegistrationConfirmationUrl?: string;
    electionRegistrationUrl?: string;
    electionRulesUrl?: string;
    hoursOfOperation?: string;
    name?: string;
    physicalAddress?: SimpleAddressType;
    voterServices?: string[];
    votingLocationFinderUrl?: string;
}
