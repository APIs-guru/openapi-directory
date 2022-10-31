package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerCompositeTypesGetPathParams struct {
    CompositeType string `pathParam:"style=simple,explode=false,name=compositeType"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerCompositeTypesGetQueryParams struct {
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

type DeploymentmanagerCompositeTypesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesGetSecurity struct {
    Option1 *DeploymentmanagerCompositeTypesGetSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerCompositeTypesGetSecurityOption2 `security:"option"`
    Option3 *DeploymentmanagerCompositeTypesGetSecurityOption3 `security:"option"`
    Option4 *DeploymentmanagerCompositeTypesGetSecurityOption4 `security:"option"`
    
}

type DeploymentmanagerCompositeTypesGetRequest struct {
    PathParams DeploymentmanagerCompositeTypesGetPathParams 
    QueryParams DeploymentmanagerCompositeTypesGetQueryParams 
    Security DeploymentmanagerCompositeTypesGetSecurity 
    
}

type DeploymentmanagerCompositeTypesGetResponse struct {
    CompositeType *shared.CompositeType 
    ContentType string 
    StatusCode int64 
    
}

