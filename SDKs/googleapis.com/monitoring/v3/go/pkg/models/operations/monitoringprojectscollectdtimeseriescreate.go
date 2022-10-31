package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsCollectdTimeSeriesCreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsCollectdTimeSeriesCreateQueryParams struct {
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

type MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsCollectdTimeSeriesCreateSecurity struct {
    Option1 *MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsCollectdTimeSeriesCreateRequest struct {
    PathParams MonitoringProjectsCollectdTimeSeriesCreatePathParams 
    QueryParams MonitoringProjectsCollectdTimeSeriesCreateQueryParams 
    Request *shared.CreateCollectdTimeSeriesRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsCollectdTimeSeriesCreateSecurity 
    
}

type MonitoringProjectsCollectdTimeSeriesCreateResponse struct {
    ContentType string 
    CreateCollectdTimeSeriesResponse *shared.CreateCollectdTimeSeriesResponse 
    StatusCode int64 
    
}

