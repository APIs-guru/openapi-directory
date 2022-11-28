import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum {
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

export enum CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum {
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


export class CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeOffices" })
  includeOffices?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=levels" })
  levels?: CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CivicinfoRepresentativesRepresentativeInfoByAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams;
}


export class CivicinfoRepresentativesRepresentativeInfoByAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  representativeInfoResponse?: shared.RepresentativeInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
