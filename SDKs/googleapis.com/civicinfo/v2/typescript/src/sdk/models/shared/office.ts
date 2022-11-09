import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Source } from "./source";

export enum OfficeLevelsEnum {
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

export enum OfficeRolesEnum {
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


// Office
/** 
 * Information about an Office held by one or more Officials.
**/
export class Office extends SpeakeasyBase {
  @Metadata({ data: "json, name=divisionId" })
  divisionId?: string;

  @Metadata({ data: "json, name=levels" })
  levels?: OfficeLevelsEnum[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=officialIndices" })
  officialIndices?: number[];

  @Metadata({ data: "json, name=roles" })
  roles?: OfficeRolesEnum[];

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];
}
