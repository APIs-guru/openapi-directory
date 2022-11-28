import { SpeakeasyBase } from "../../../internal/utils";
import { Candidate } from "./candidate";
import { ElectoralDistrict } from "./electoraldistrict";
import { Source } from "./source";
export declare enum ContestLevelEnum {
    International = "international",
    Country = "country",
    AdministrativeArea1 = "administrativeArea1",
    Regional = "regional",
    AdministrativeArea2 = "administrativeArea2",
    Locality = "locality",
    SubLocality1 = "subLocality1",
    SubLocality2 = "subLocality2",
    Special = "special"
}
export declare enum ContestRolesEnum {
    HeadOfState = "headOfState",
    HeadOfGovernment = "headOfGovernment",
    DeputyHeadOfGovernment = "deputyHeadOfGovernment",
    GovernmentOfficer = "governmentOfficer",
    ExecutiveCouncil = "executiveCouncil",
    LegislatorUpperBody = "legislatorUpperBody",
    LegislatorLowerBody = "legislatorLowerBody",
    HighestCourtJudge = "highestCourtJudge",
    Judge = "judge",
    SchoolBoard = "schoolBoard",
    SpecialPurposeOfficer = "specialPurposeOfficer",
    OtherRole = "otherRole"
}
/**
 * Information about a contest that appears on a voter's ballot.
**/
export declare class Contest extends SpeakeasyBase {
    ballotPlacement?: string;
    ballotTitle?: string;
    candidates?: Candidate[];
    district?: ElectoralDistrict;
    electorateSpecifications?: string;
    level?: ContestLevelEnum[];
    numberElected?: string;
    numberVotingFor?: string;
    office?: string;
    primaryParties?: string[];
    primaryParty?: string;
    referendumBallotResponses?: string[];
    referendumBrief?: string;
    referendumConStatement?: string;
    referendumEffectOfAbstain?: string;
    referendumPassageThreshold?: string;
    referendumProStatement?: string;
    referendumSubtitle?: string;
    referendumText?: string;
    referendumTitle?: string;
    referendumUrl?: string;
    roles?: ContestRolesEnum[];
    sources?: Source[];
    special?: string;
    type?: string;
}
