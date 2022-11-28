import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum {
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
export declare enum CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum {
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
export declare class CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    address?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeOffices?: boolean;
    key?: string;
    levels?: CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    roles?: CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CivicinfoRepresentativesRepresentativeInfoByAddressRequest extends SpeakeasyBase {
    queryParams: CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams;
}
export declare class CivicinfoRepresentativesRepresentativeInfoByAddressResponse extends SpeakeasyBase {
    contentType: string;
    representativeInfoResponse?: shared.RepresentativeInfoResponse;
    statusCode: number;
}
