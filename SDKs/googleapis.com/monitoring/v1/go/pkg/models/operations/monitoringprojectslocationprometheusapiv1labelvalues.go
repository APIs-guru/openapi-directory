package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesPathParams struct {
    Label string `pathParam:"style=simple,explode=false,name=label"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    End *string `queryParam:"style=form,explode=true,name=end"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Match *string `queryParam:"style=form,explode=true,name=match"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Start *string `queryParam:"style=form,explode=true,name=start"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurity struct {
    Option1 *MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesRequest struct {
    PathParams MonitoringProjectsLocationPrometheusAPIV1LabelValuesPathParams 
    QueryParams MonitoringProjectsLocationPrometheusAPIV1LabelValuesQueryParams 
    Security MonitoringProjectsLocationPrometheusAPIV1LabelValuesSecurity 
    
}

type MonitoringProjectsLocationPrometheusAPIV1LabelValuesResponse struct {
    ContentType string 
    HTTPBody *shared.HTTPBody 
    StatusCode int64 
    
}

