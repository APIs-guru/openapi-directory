package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsGroupsUpdatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsGroupsUpdateQueryParams struct {
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
    ValidateOnly *bool `queryParam:"style=form,explode=true,name=validateOnly"`
    
}

type MonitoringProjectsGroupsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsGroupsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsGroupsUpdateSecurity struct {
    Option1 *MonitoringProjectsGroupsUpdateSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsGroupsUpdateSecurityOption2 `security:"option"`
    
}

type MonitoringProjectsGroupsUpdateRequest struct {
    PathParams MonitoringProjectsGroupsUpdatePathParams 
    QueryParams MonitoringProjectsGroupsUpdateQueryParams 
    Request *shared.Group `request:"mediaType=application/json"`
    Security MonitoringProjectsGroupsUpdateSecurity 
    
}

type MonitoringProjectsGroupsUpdateResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

