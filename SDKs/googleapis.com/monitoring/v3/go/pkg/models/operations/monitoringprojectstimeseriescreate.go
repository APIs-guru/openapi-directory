package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsTimeSeriesCreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsTimeSeriesCreateQueryParams struct {
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

type MonitoringProjectsTimeSeriesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesCreateSecurity struct {
    Option1 *MonitoringProjectsTimeSeriesCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsTimeSeriesCreateSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsTimeSeriesCreateSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsTimeSeriesCreateRequest struct {
    PathParams MonitoringProjectsTimeSeriesCreatePathParams 
    QueryParams MonitoringProjectsTimeSeriesCreateQueryParams 
    Request *shared.CreateTimeSeriesRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsTimeSeriesCreateSecurity 
    
}

type MonitoringProjectsTimeSeriesCreateResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

