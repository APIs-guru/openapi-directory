package operations

import (
"openapi/pkg/models/shared")

type VmmigrationProjectsLocationsGroupsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type VmmigrationProjectsLocationsGroupsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID *string `queryParam:"style=form,explode=true,name=requestId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type VmmigrationProjectsLocationsGroupsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VmmigrationProjectsLocationsGroupsCreateRequest struct {
    PathParams VmmigrationProjectsLocationsGroupsCreatePathParams 
    QueryParams VmmigrationProjectsLocationsGroupsCreateQueryParams 
    Request *shared.Group `request:"mediaType=application/json"`
    Security VmmigrationProjectsLocationsGroupsCreateSecurity 
    
}

type VmmigrationProjectsLocationsGroupsCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

