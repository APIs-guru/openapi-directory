package operations

import (
	"openapi/pkg/models/shared"
)

type RunProjectsLocationsServicesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RunProjectsLocationsServicesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceID      *string           `queryParam:"style=form,explode=true,name=serviceId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type RunProjectsLocationsServicesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunProjectsLocationsServicesCreateRequest struct {
	PathParams  RunProjectsLocationsServicesCreatePathParams
	QueryParams RunProjectsLocationsServicesCreateQueryParams
	Request     *shared.GoogleCloudRunV2ServiceInput `request:"mediaType=application/json"`
	Security    RunProjectsLocationsServicesCreateSecurity
}

type RunProjectsLocationsServicesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
