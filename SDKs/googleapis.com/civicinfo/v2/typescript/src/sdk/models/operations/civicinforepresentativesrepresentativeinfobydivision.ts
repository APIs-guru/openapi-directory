import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ocdId" })
  ocdId: string;
}

export enum CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum {
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

export enum CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum {
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


export class CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=levels" })
  levels?: CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CivicinfoRepresentativesRepresentativeInfoByDivisionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams;

  @Metadata()
  queryParams: CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams;
}


export class CivicinfoRepresentativesRepresentativeInfoByDivisionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  representativeInfoData?: shared.RepresentativeInfoData;

  @Metadata()
  statusCode: number;
}
