package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity struct {
	Option1 *ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1 `security:"option"`
	Option2 *ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2 `security:"option"`
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest struct {
	PathParams  ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams
	QueryParams ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams
	Request     *shared.ImportConsumerOverridesRequest `request:"mediaType=application/json"`
	Security    ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity
}

type ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
