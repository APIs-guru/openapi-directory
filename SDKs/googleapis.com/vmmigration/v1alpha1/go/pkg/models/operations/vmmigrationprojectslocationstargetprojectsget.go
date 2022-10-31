package operations

import (
"openapi/pkg/models/shared")

type VmmigrationProjectsLocationsTargetProjectsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type VmmigrationProjectsLocationsTargetProjectsGetViewEnum string

const (
    VmmigrationProjectsLocationsTargetProjectsGetViewEnumUtilizationReportViewUnspecified VmmigrationProjectsLocationsTargetProjectsGetViewEnum = "UTILIZATION_REPORT_VIEW_UNSPECIFIED"
VmmigrationProjectsLocationsTargetProjectsGetViewEnumBasic VmmigrationProjectsLocationsTargetProjectsGetViewEnum = "BASIC"
VmmigrationProjectsLocationsTargetProjectsGetViewEnumFull VmmigrationProjectsLocationsTargetProjectsGetViewEnum = "FULL"
)


type VmmigrationProjectsLocationsTargetProjectsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *VmmigrationProjectsLocationsTargetProjectsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type VmmigrationProjectsLocationsTargetProjectsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VmmigrationProjectsLocationsTargetProjectsGetRequest struct {
    PathParams VmmigrationProjectsLocationsTargetProjectsGetPathParams 
    QueryParams VmmigrationProjectsLocationsTargetProjectsGetQueryParams 
    Security VmmigrationProjectsLocationsTargetProjectsGetSecurity 
    
}

type VmmigrationProjectsLocationsTargetProjectsGetResponse struct {
    ContentType string 
    StatusCode int64 
    TargetProject *shared.TargetProject 
    
}

