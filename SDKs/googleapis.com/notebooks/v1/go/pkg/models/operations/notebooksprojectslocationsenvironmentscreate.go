package operations

import (
	"openapi/pkg/models/shared"
)

type NotebooksProjectsLocationsEnvironmentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type NotebooksProjectsLocationsEnvironmentsCreateQueryParams struct {
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
}

type NotebooksProjectsLocationsEnvironmentsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NotebooksProjectsLocationsEnvironmentsCreateRequest struct {
	PathParams  NotebooksProjectsLocationsEnvironmentsCreatePathParams
	QueryParams NotebooksProjectsLocationsEnvironmentsCreateQueryParams
	Request     *shared.Environment `request:"mediaType=application/json"`
	Security    NotebooksProjectsLocationsEnvironmentsCreateSecurity
}

type NotebooksProjectsLocationsEnvironmentsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
