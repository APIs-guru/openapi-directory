import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Candidate } from "./candidate";
import { ElectoralDistrict } from "./electoraldistrict";
import { Source } from "./source";


export enum ContestLevelEnum {
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

export enum ContestRolesEnum {
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


// Contest
/** 
 * Information about a contest that appears on a voter's ballot.
**/
export class Contest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ballotPlacement" })
  ballotPlacement?: string;

  @SpeakeasyMetadata({ data: "json, name=ballotTitle" })
  ballotTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=candidates", elemType: Candidate })
  candidates?: Candidate[];

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: ElectoralDistrict;

  @SpeakeasyMetadata({ data: "json, name=electorateSpecifications" })
  electorateSpecifications?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: ContestLevelEnum[];

  @SpeakeasyMetadata({ data: "json, name=numberElected" })
  numberElected?: string;

  @SpeakeasyMetadata({ data: "json, name=numberVotingFor" })
  numberVotingFor?: string;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryParties" })
  primaryParties?: string[];

  @SpeakeasyMetadata({ data: "json, name=primaryParty" })
  primaryParty?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumBallotResponses" })
  referendumBallotResponses?: string[];

  @SpeakeasyMetadata({ data: "json, name=referendumBrief" })
  referendumBrief?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumConStatement" })
  referendumConStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumEffectOfAbstain" })
  referendumEffectOfAbstain?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumPassageThreshold" })
  referendumPassageThreshold?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumProStatement" })
  referendumProStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumSubtitle" })
  referendumSubtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumText" })
  referendumText?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumTitle" })
  referendumTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=referendumUrl" })
  referendumUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: ContestRolesEnum[];

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];

  @SpeakeasyMetadata({ data: "json, name=special" })
  special?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
