package operations

import (
"openapi/pkg/models/shared")

type MlProjectsLocationsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MlProjectsLocationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MlProjectsLocationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MlProjectsLocationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MlProjectsLocationsListSecurity struct {
    Option1 *MlProjectsLocationsListSecurityOption1 `security:"option"`
    Option2 *MlProjectsLocationsListSecurityOption2 `security:"option"`
    
}

type MlProjectsLocationsListRequest struct {
    PathParams MlProjectsLocationsListPathParams 
    QueryParams MlProjectsLocationsListQueryParams 
    Security MlProjectsLocationsListSecurity 
    
}

type MlProjectsLocationsListResponse struct {
    ContentType string 
    GoogleCloudMlV1ListLocationsResponse *shared.GoogleCloudMlV1ListLocationsResponse 
    StatusCode int64 
    
}

