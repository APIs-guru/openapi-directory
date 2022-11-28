package operations

import (
	"openapi/pkg/models/shared"
)

type DataplexProjectsLocationsLakesEnvironmentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EnvironmentID  *string           `queryParam:"style=form,explode=true,name=environmentId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type DataplexProjectsLocationsLakesEnvironmentsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataplexProjectsLocationsLakesEnvironmentsCreateRequest struct {
	PathParams  DataplexProjectsLocationsLakesEnvironmentsCreatePathParams
	QueryParams DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams
	Request     *shared.GoogleCloudDataplexV1EnvironmentInput `request:"mediaType=application/json"`
	Security    DataplexProjectsLocationsLakesEnvironmentsCreateSecurity
}

type DataplexProjectsLocationsLakesEnvironmentsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
