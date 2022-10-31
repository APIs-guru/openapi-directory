package operations

import (
"openapi/pkg/models/shared")

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum string

const (
    ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnumQuotaSafetyCheckUnspecified ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)


type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    ForceOnly []ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity struct {
    Option1 *ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 `security:"option"`
    Option2 *ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 `security:"option"`
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest struct {
    PathParams ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams 
    QueryParams ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams 
    Request *shared.QuotaOverride `request:"mediaType=application/json"`
    Security ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity 
    
}

type ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

