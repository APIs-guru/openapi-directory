package operations

import (
"openapi/pkg/models/shared")

type ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum string

const (
    ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnumQuotaViewUnspecified ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum = "QUOTA_VIEW_UNSPECIFIED"
ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnumBasic ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum = "BASIC"
ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnumFull ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum = "FULL"
)


type ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams struct {
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
    View *ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity struct {
    Option1 *ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1 `security:"option"`
    Option2 *ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2 `security:"option"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest struct {
    PathParams ServiceusageServicesConsumerQuotaMetricsLimitsGetPathParams 
    QueryParams ServiceusageServicesConsumerQuotaMetricsLimitsGetQueryParams 
    Security ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity 
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse struct {
    ConsumerQuotaLimit *shared.ConsumerQuotaLimit 
    ContentType string 
    StatusCode int64 
    
}

