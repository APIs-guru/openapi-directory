package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum string

const (
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnumQuotaSafetyCheckUnspecified    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnumLimitDecreaseBelowUsage        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnumLimitDecreasePercentageTooHigh ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                             `queryParam:"style=form,explode=true,name=fields"`
	Force          *bool                                                                               `queryParam:"style=form,explode=true,name=force"`
	ForceOnly      []ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
	Key            *string                                                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string                                                                             `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string                                                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity struct {
	Option1 *ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1 `security:"option"`
	Option2 *ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2 `security:"option"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest struct {
	PathParams  ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams
	QueryParams ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams
	Request     *shared.QuotaOverride `request:"mediaType=application/json"`
	Security    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
