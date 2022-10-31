package operations

import (
"openapi/pkg/models/shared")

type CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams struct {
    OcdID string `pathParam:"style=simple,explode=false,name=ocdId"`
    
}


type CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum string

const (
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumInternational CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "international"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumCountry CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "country"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumAdministrativeArea1 CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "administrativeArea1"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumRegional CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "regional"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumAdministrativeArea2 CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "administrativeArea2"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumLocality CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "locality"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumSubLocality1 CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "subLocality1"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumSubLocality2 CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "subLocality2"
CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnumSpecial CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = "special"
)



type CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum string

const (
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumHeadOfState CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "headOfState"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumHeadOfGovernment CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "headOfGovernment"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumDeputyHeadOfGovernment CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "deputyHeadOfGovernment"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumGovernmentOfficer CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "governmentOfficer"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumExecutiveCouncil CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "executiveCouncil"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumLegislatorUpperBody CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "legislatorUpperBody"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumLegislatorLowerBody CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "legislatorLowerBody"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumHighestCourtJudge CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "highestCourtJudge"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumJudge CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "judge"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumSchoolBoard CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "schoolBoard"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumSpecialPurposeOfficer CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "specialPurposeOfficer"
CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnumOtherRole CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = "otherRole"
)


type CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Levels []CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum `queryParam:"style=form,explode=true,name=levels"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    Roles []CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum `queryParam:"style=form,explode=true,name=roles"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CivicinfoRepresentativesRepresentativeInfoByDivisionRequest struct {
    PathParams CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams 
    QueryParams CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams 
    
}

type CivicinfoRepresentativesRepresentativeInfoByDivisionResponse struct {
    ContentType string 
    RepresentativeInfoData *shared.RepresentativeInfoData 
    StatusCode int64 
    
}

