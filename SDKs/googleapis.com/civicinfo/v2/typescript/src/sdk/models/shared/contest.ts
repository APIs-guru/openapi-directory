import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Candidate } from "./candidate";
import { ElectoralDistrict } from "./electoraldistrict";
import { Source } from "./source";

export enum ContestLevelEnum {
    International = "international"
,    Country = "country"
,    AdministrativeArea1 = "administrativeArea1"
,    Regional = "regional"
,    AdministrativeArea2 = "administrativeArea2"
,    Locality = "locality"
,    SubLocality1 = "subLocality1"
,    SubLocality2 = "subLocality2"
,    Special = "special"
}

export enum ContestRolesEnum {
    HeadOfState = "headOfState"
,    HeadOfGovernment = "headOfGovernment"
,    DeputyHeadOfGovernment = "deputyHeadOfGovernment"
,    GovernmentOfficer = "governmentOfficer"
,    ExecutiveCouncil = "executiveCouncil"
,    LegislatorUpperBody = "legislatorUpperBody"
,    LegislatorLowerBody = "legislatorLowerBody"
,    HighestCourtJudge = "highestCourtJudge"
,    Judge = "judge"
,    SchoolBoard = "schoolBoard"
,    SpecialPurposeOfficer = "specialPurposeOfficer"
,    OtherRole = "otherRole"
}


// Contest
/** 
 * Information about a contest that appears on a voter's ballot.
**/
export class Contest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ballotPlacement" })
  ballotPlacement?: string;

  @Metadata({ data: "json, name=ballotTitle" })
  ballotTitle?: string;

  @Metadata({ data: "json, name=candidates", elemType: shared.Candidate })
  candidates?: Candidate[];

  @Metadata({ data: "json, name=district" })
  district?: ElectoralDistrict;

  @Metadata({ data: "json, name=electorateSpecifications" })
  electorateSpecifications?: string;

  @Metadata({ data: "json, name=level" })
  level?: ContestLevelEnum[];

  @Metadata({ data: "json, name=numberElected" })
  numberElected?: string;

  @Metadata({ data: "json, name=numberVotingFor" })
  numberVotingFor?: string;

  @Metadata({ data: "json, name=office" })
  office?: string;

  @Metadata({ data: "json, name=primaryParties" })
  primaryParties?: string[];

  @Metadata({ data: "json, name=primaryParty" })
  primaryParty?: string;

  @Metadata({ data: "json, name=referendumBallotResponses" })
  referendumBallotResponses?: string[];

  @Metadata({ data: "json, name=referendumBrief" })
  referendumBrief?: string;

  @Metadata({ data: "json, name=referendumConStatement" })
  referendumConStatement?: string;

  @Metadata({ data: "json, name=referendumEffectOfAbstain" })
  referendumEffectOfAbstain?: string;

  @Metadata({ data: "json, name=referendumPassageThreshold" })
  referendumPassageThreshold?: string;

  @Metadata({ data: "json, name=referendumProStatement" })
  referendumProStatement?: string;

  @Metadata({ data: "json, name=referendumSubtitle" })
  referendumSubtitle?: string;

  @Metadata({ data: "json, name=referendumText" })
  referendumText?: string;

  @Metadata({ data: "json, name=referendumTitle" })
  referendumTitle?: string;

  @Metadata({ data: "json, name=referendumUrl" })
  referendumUrl?: string;

  @Metadata({ data: "json, name=roles" })
  roles?: ContestRolesEnum[];

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];

  @Metadata({ data: "json, name=special" })
  special?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
