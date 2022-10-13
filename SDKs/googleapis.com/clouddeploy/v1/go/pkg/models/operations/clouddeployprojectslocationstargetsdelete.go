package operations

import (
	"openapi/pkg/models/shared"
)

type ClouddeployProjectsLocationsTargetsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ClouddeployProjectsLocationsTargetsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowMissing   *bool             `queryParam:"style=form,explode=true,name=allowMissing"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Etag           *string           `queryParam:"style=form,explode=true,name=etag"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type ClouddeployProjectsLocationsTargetsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddeployProjectsLocationsTargetsDeleteRequest struct {
	PathParams  ClouddeployProjectsLocationsTargetsDeletePathParams
	QueryParams ClouddeployProjectsLocationsTargetsDeleteQueryParams
	Security    ClouddeployProjectsLocationsTargetsDeleteSecurity
}

type ClouddeployProjectsLocationsTargetsDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
