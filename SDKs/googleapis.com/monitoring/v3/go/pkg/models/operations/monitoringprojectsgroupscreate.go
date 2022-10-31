package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsGroupsCreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsGroupsCreateQueryParams struct {
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

type MonitoringProjectsGroupsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsGroupsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsGroupsCreateSecurity struct {
    Option1 *MonitoringProjectsGroupsCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsGroupsCreateSecurityOption2 `security:"option"`
    
}

type MonitoringProjectsGroupsCreateRequest struct {
    PathParams MonitoringProjectsGroupsCreatePathParams 
    QueryParams MonitoringProjectsGroupsCreateQueryParams 
    Request *shared.Group `request:"mediaType=application/json"`
    Security MonitoringProjectsGroupsCreateSecurity 
    
}

type MonitoringProjectsGroupsCreateResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

