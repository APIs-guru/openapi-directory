package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsLocationPrometheusAPIV1QueryRangePathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeQueryParams struct {
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

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurity struct {
    Option1 *MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeRequest struct {
    PathParams MonitoringProjectsLocationPrometheusAPIV1QueryRangePathParams 
    QueryParams MonitoringProjectsLocationPrometheusAPIV1QueryRangeQueryParams 
    Request *shared.QueryRangeRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsLocationPrometheusAPIV1QueryRangeSecurity 
    
}

type MonitoringProjectsLocationPrometheusAPIV1QueryRangeResponse struct {
    ContentType string 
    HTTPBody *shared.HTTPBody 
    StatusCode int64 
    
}

