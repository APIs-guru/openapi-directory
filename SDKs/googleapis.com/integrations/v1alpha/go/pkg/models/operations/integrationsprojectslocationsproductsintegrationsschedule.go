package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsProjectsLocationsProductsIntegrationsSchedulePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type IntegrationsProjectsLocationsProductsIntegrationsScheduleQueryParams struct {
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

type IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest struct {
	PathParams  IntegrationsProjectsLocationsProductsIntegrationsSchedulePathParams
	QueryParams IntegrationsProjectsLocationsProductsIntegrationsScheduleQueryParams
	Request     *shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest `request:"mediaType=application/json"`
	Security    IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity
}

type IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse struct {
	ContentType                                                string
	GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse *shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse
	StatusCode                                                 int64
}
