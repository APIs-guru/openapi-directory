package operations

import (
"openapi/pkg/models/shared")

type MonitoringServicesServiceLevelObjectivesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MonitoringServicesServiceLevelObjectivesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ServiceLevelObjectiveID *string `queryParam:"style=form,explode=true,name=serviceLevelObjectiveId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MonitoringServicesServiceLevelObjectivesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringServicesServiceLevelObjectivesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringServicesServiceLevelObjectivesCreateSecurity struct {
    Option1 *MonitoringServicesServiceLevelObjectivesCreateSecurityOption1 `security:"option"`
    Option2 *MonitoringServicesServiceLevelObjectivesCreateSecurityOption2 `security:"option"`
    
}

type MonitoringServicesServiceLevelObjectivesCreateRequest struct {
    PathParams MonitoringServicesServiceLevelObjectivesCreatePathParams 
    QueryParams MonitoringServicesServiceLevelObjectivesCreateQueryParams 
    Request *shared.ServiceLevelObjective `request:"mediaType=application/json"`
    Security MonitoringServicesServiceLevelObjectivesCreateSecurity 
    
}

type MonitoringServicesServiceLevelObjectivesCreateResponse struct {
    ContentType string 
    ServiceLevelObjective *shared.ServiceLevelObjective 
    StatusCode int64 
    
}

