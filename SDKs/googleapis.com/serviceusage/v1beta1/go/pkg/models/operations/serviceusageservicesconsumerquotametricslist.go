package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceusageServicesConsumerQuotaMetricsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServiceusageServicesConsumerQuotaMetricsListViewEnum string

const (
	ServiceusageServicesConsumerQuotaMetricsListViewEnumQuotaViewUnspecified ServiceusageServicesConsumerQuotaMetricsListViewEnum = "QUOTA_VIEW_UNSPECIFIED"
	ServiceusageServicesConsumerQuotaMetricsListViewEnumBasic                ServiceusageServicesConsumerQuotaMetricsListViewEnum = "BASIC"
	ServiceusageServicesConsumerQuotaMetricsListViewEnumFull                 ServiceusageServicesConsumerQuotaMetricsListViewEnum = "FULL"
)

type ServiceusageServicesConsumerQuotaMetricsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                               `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                               `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                               `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                               `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ServiceusageServicesConsumerQuotaMetricsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceusageServicesConsumerQuotaMetricsListSecurity struct {
	Option1 *ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 `security:"option"`
	Option2 *ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 `security:"option"`
}

type ServiceusageServicesConsumerQuotaMetricsListRequest struct {
	PathParams  ServiceusageServicesConsumerQuotaMetricsListPathParams
	QueryParams ServiceusageServicesConsumerQuotaMetricsListQueryParams
	Security    ServiceusageServicesConsumerQuotaMetricsListSecurity
}

type ServiceusageServicesConsumerQuotaMetricsListResponse struct {
	ContentType                      string
	ListConsumerQuotaMetricsResponse *shared.ListConsumerQuotaMetricsResponse
	StatusCode                       int64
}
