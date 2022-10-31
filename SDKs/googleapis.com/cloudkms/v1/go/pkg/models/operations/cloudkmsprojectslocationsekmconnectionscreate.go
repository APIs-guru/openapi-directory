package operations

import (
"openapi/pkg/models/shared")

type CloudkmsProjectsLocationsEkmConnectionsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EkmConnectionID *string `queryParam:"style=form,explode=true,name=ekmConnectionId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateSecurity struct {
    Option1 *CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 `security:"option"`
    Option2 *CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 `security:"option"`
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateRequest struct {
    PathParams CloudkmsProjectsLocationsEkmConnectionsCreatePathParams 
    QueryParams CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams 
    Request *shared.EkmConnection `request:"mediaType=application/json"`
    Security CloudkmsProjectsLocationsEkmConnectionsCreateSecurity 
    
}

type CloudkmsProjectsLocationsEkmConnectionsCreateResponse struct {
    ContentType string 
    EkmConnection *shared.EkmConnection 
    StatusCode int64 
    
}

