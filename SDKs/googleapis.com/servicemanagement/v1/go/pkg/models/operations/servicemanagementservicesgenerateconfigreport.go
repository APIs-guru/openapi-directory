package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesGenerateConfigReportQueryParams struct {
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

type ServicemanagementServicesGenerateConfigReportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGenerateConfigReportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesGenerateConfigReportSecurity struct {
	Option1 *ServicemanagementServicesGenerateConfigReportSecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesGenerateConfigReportSecurityOption2 `security:"option"`
}

type ServicemanagementServicesGenerateConfigReportRequest struct {
	QueryParams ServicemanagementServicesGenerateConfigReportQueryParams
	Request     *shared.GenerateConfigReportRequest `request:"mediaType=application/json"`
	Security    ServicemanagementServicesGenerateConfigReportSecurity
}

type ServicemanagementServicesGenerateConfigReportResponse struct {
	ContentType                  string
	GenerateConfigReportResponse *shared.GenerateConfigReportResponse
	StatusCode                   int64
}
