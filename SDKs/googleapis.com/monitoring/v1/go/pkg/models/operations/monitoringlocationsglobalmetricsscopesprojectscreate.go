package operations

import (
"openapi/pkg/models/shared")

type MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams struct {
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

type MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity struct {
    Option1 *MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2 `security:"option"`
    Option3 *MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3 `security:"option"`
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest struct {
    PathParams MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams 
    QueryParams MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams 
    Request *shared.MonitoredProject `request:"mediaType=application/json"`
    Security MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity 
    
}

type MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

