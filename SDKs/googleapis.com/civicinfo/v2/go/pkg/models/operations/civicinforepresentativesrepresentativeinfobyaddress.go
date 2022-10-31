package operations

import (
"openapi/pkg/models/shared")


type CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum string

const (
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumInternational CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "international"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumCountry CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "country"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumAdministrativeArea1 CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "administrativeArea1"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumRegional CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "regional"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumAdministrativeArea2 CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "administrativeArea2"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumLocality CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "locality"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumSubLocality1 CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "subLocality1"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumSubLocality2 CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "subLocality2"
CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnumSpecial CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = "special"
)



type CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum string

const (
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumHeadOfState CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "headOfState"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumHeadOfGovernment CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "headOfGovernment"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumDeputyHeadOfGovernment CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "deputyHeadOfGovernment"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumGovernmentOfficer CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "governmentOfficer"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumExecutiveCouncil CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "executiveCouncil"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumLegislatorUpperBody CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "legislatorUpperBody"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumLegislatorLowerBody CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "legislatorLowerBody"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumHighestCourtJudge CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "highestCourtJudge"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumJudge CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "judge"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumSchoolBoard CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "schoolBoard"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumSpecialPurposeOfficer CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "specialPurposeOfficer"
CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnumOtherRole CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = "otherRole"
)


type CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Address *string `queryParam:"style=form,explode=true,name=address"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeOffices *bool `queryParam:"style=form,explode=true,name=includeOffices"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Levels []CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum `queryParam:"style=form,explode=true,name=levels"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Roles []CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum `queryParam:"style=form,explode=true,name=roles"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CivicinfoRepresentativesRepresentativeInfoByAddressRequest struct {
    QueryParams CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams 
    
}

type CivicinfoRepresentativesRepresentativeInfoByAddressResponse struct {
    ContentType string 
    RepresentativeInfoResponse *shared.RepresentativeInfoResponse 
    StatusCode int64 
    
}

