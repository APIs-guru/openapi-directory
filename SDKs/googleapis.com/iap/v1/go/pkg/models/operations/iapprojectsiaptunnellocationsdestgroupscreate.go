package operations

import (
"openapi/pkg/models/shared")

type IapProjectsIapTunnelLocationsDestGroupsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TunnelDestGroupID *string `queryParam:"style=form,explode=true,name=tunnelDestGroupId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type IapProjectsIapTunnelLocationsDestGroupsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IapProjectsIapTunnelLocationsDestGroupsCreateRequest struct {
    PathParams IapProjectsIapTunnelLocationsDestGroupsCreatePathParams 
    QueryParams IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams 
    Request *shared.TunnelDestGroup `request:"mediaType=application/json"`
    Security IapProjectsIapTunnelLocationsDestGroupsCreateSecurity 
    
}

type IapProjectsIapTunnelLocationsDestGroupsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    TunnelDestGroup *shared.TunnelDestGroup 
    
}

