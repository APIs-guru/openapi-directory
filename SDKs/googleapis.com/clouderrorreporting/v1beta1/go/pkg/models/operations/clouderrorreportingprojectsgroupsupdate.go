package operations

import (
"openapi/pkg/models/shared")

type ClouderrorreportingProjectsGroupsUpdatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ClouderrorreportingProjectsGroupsUpdateQueryParams struct {
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
    
}

type ClouderrorreportingProjectsGroupsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouderrorreportingProjectsGroupsUpdateRequest struct {
    PathParams ClouderrorreportingProjectsGroupsUpdatePathParams 
    QueryParams ClouderrorreportingProjectsGroupsUpdateQueryParams 
    Request *shared.ErrorGroup `request:"mediaType=application/json"`
    Security ClouderrorreportingProjectsGroupsUpdateSecurity 
    
}

type ClouderrorreportingProjectsGroupsUpdateResponse struct {
    ContentType string 
    ErrorGroup *shared.ErrorGroup 
    StatusCode int64 
    
}

