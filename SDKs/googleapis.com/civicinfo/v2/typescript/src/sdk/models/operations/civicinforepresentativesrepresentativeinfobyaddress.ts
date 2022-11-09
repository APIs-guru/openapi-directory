import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum {
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

export enum CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum {
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


export class CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeOffices" })
  includeOffices?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=levels" })
  levels?: CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CivicinfoRepresentativesRepresentativeInfoByAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams;
}


export class CivicinfoRepresentativesRepresentativeInfoByAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  representativeInfoResponse?: shared.RepresentativeInfoResponse;

  @Metadata()
  statusCode: number;
}
