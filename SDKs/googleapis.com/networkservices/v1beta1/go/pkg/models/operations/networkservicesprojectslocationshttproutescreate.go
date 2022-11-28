package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkservicesProjectsLocationsHTTPRoutesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type NetworkservicesProjectsLocationsHTTPRoutesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	HTTPRouteID    *string           `queryParam:"style=form,explode=true,name=httpRouteId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type NetworkservicesProjectsLocationsHTTPRoutesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NetworkservicesProjectsLocationsHTTPRoutesCreateRequest struct {
	PathParams  NetworkservicesProjectsLocationsHTTPRoutesCreatePathParams
	QueryParams NetworkservicesProjectsLocationsHTTPRoutesCreateQueryParams
	Request     *shared.HTTPRouteInput `request:"mediaType=application/json"`
	Security    NetworkservicesProjectsLocationsHTTPRoutesCreateSecurity
}

type NetworkservicesProjectsLocationsHTTPRoutesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
