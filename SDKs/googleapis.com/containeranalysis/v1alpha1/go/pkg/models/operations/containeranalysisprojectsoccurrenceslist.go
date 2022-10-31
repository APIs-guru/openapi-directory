package operations

import (
"openapi/pkg/models/shared")

type ContaineranalysisProjectsOccurrencesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type ContaineranalysisProjectsOccurrencesListKindEnum string

const (
    ContaineranalysisProjectsOccurrencesListKindEnumKindUnspecified ContaineranalysisProjectsOccurrencesListKindEnum = "KIND_UNSPECIFIED"
ContaineranalysisProjectsOccurrencesListKindEnumPackageVulnerability ContaineranalysisProjectsOccurrencesListKindEnum = "PACKAGE_VULNERABILITY"
ContaineranalysisProjectsOccurrencesListKindEnumBuildDetails ContaineranalysisProjectsOccurrencesListKindEnum = "BUILD_DETAILS"
ContaineranalysisProjectsOccurrencesListKindEnumImageBasis ContaineranalysisProjectsOccurrencesListKindEnum = "IMAGE_BASIS"
ContaineranalysisProjectsOccurrencesListKindEnumPackageManager ContaineranalysisProjectsOccurrencesListKindEnum = "PACKAGE_MANAGER"
ContaineranalysisProjectsOccurrencesListKindEnumDeployable ContaineranalysisProjectsOccurrencesListKindEnum = "DEPLOYABLE"
ContaineranalysisProjectsOccurrencesListKindEnumDiscovery ContaineranalysisProjectsOccurrencesListKindEnum = "DISCOVERY"
ContaineranalysisProjectsOccurrencesListKindEnumAttestationAuthority ContaineranalysisProjectsOccurrencesListKindEnum = "ATTESTATION_AUTHORITY"
ContaineranalysisProjectsOccurrencesListKindEnumUpgrade ContaineranalysisProjectsOccurrencesListKindEnum = "UPGRADE"
ContaineranalysisProjectsOccurrencesListKindEnumCompliance ContaineranalysisProjectsOccurrencesListKindEnum = "COMPLIANCE"
ContaineranalysisProjectsOccurrencesListKindEnumSbom ContaineranalysisProjectsOccurrencesListKindEnum = "SBOM"
ContaineranalysisProjectsOccurrencesListKindEnumSpdxPackage ContaineranalysisProjectsOccurrencesListKindEnum = "SPDX_PACKAGE"
ContaineranalysisProjectsOccurrencesListKindEnumSpdxFile ContaineranalysisProjectsOccurrencesListKindEnum = "SPDX_FILE"
ContaineranalysisProjectsOccurrencesListKindEnumSpdxRelationship ContaineranalysisProjectsOccurrencesListKindEnum = "SPDX_RELATIONSHIP"
ContaineranalysisProjectsOccurrencesListKindEnumDsseAttestation ContaineranalysisProjectsOccurrencesListKindEnum = "DSSE_ATTESTATION"
)


type ContaineranalysisProjectsOccurrencesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Kind *ContaineranalysisProjectsOccurrencesListKindEnum `queryParam:"style=form,explode=true,name=kind"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContaineranalysisProjectsOccurrencesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContaineranalysisProjectsOccurrencesListRequest struct {
    PathParams ContaineranalysisProjectsOccurrencesListPathParams 
    QueryParams ContaineranalysisProjectsOccurrencesListQueryParams 
    Security ContaineranalysisProjectsOccurrencesListSecurity 
    
}

type ContaineranalysisProjectsOccurrencesListResponse struct {
    ContentType string 
    ListOccurrencesResponse *shared.ListOccurrencesResponse 
    StatusCode int64 
    
}

