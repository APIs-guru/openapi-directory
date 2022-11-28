import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams extends SpeakeasyBase {
    ocdId: string;
}
export declare enum CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum {
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
export declare enum CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum {
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
export declare class CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    levels?: CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    recursive?: boolean;
    roles?: CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CivicinfoRepresentativesRepresentativeInfoByDivisionRequest extends SpeakeasyBase {
    pathParams: CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams;
    queryParams: CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams;
}
export declare class CivicinfoRepresentativesRepresentativeInfoByDivisionResponse extends SpeakeasyBase {
    contentType: string;
    representativeInfoData?: shared.RepresentativeInfoData;
    statusCode: number;
}
