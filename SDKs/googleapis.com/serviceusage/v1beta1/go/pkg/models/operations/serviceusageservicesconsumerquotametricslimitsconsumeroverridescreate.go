package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum string

const (
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumQuotaSafetyCheckUnspecified    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                              `queryParam:"style=form,explode=true,name=fields"`
	Force          *bool                                                                                `queryParam:"style=form,explode=true,name=force"`
	ForceOnly      []ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
	Key            *string                                                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity struct {
	Option1 *ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1 `security:"option"`
	Option2 *ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2 `security:"option"`
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest struct {
	PathParams  ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams
	QueryParams ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams
	Request     *shared.QuotaOverride `request:"mediaType=application/json"`
	Security    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity
}

type ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
