package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsDashboardsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MonitoringProjectsDashboardsCreateQueryParams struct {
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

type MonitoringProjectsDashboardsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsDashboardsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsDashboardsCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsDashboardsCreateSecurity struct {
    Option1 *MonitoringProjectsDashboardsCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsDashboardsCreateSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsDashboardsCreateSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsDashboardsCreateRequest struct {
    PathParams MonitoringProjectsDashboardsCreatePathParams 
    QueryParams MonitoringProjectsDashboardsCreateQueryParams 
    Request *shared.Dashboard `request:"mediaType=application/json"`
    Security MonitoringProjectsDashboardsCreateSecurity 
    
}

type MonitoringProjectsDashboardsCreateResponse struct {
    ContentType string 
    Dashboard *shared.Dashboard 
    StatusCode int64 
    
}

