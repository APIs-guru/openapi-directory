package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkconnectivityProjectsLocationsSpokesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type NetworkconnectivityProjectsLocationsSpokesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	SpokeID        *string           `queryParam:"style=form,explode=true,name=spokeId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type NetworkconnectivityProjectsLocationsSpokesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NetworkconnectivityProjectsLocationsSpokesCreateRequest struct {
	PathParams  NetworkconnectivityProjectsLocationsSpokesCreatePathParams
	QueryParams NetworkconnectivityProjectsLocationsSpokesCreateQueryParams
	Request     *shared.Spoke `request:"mediaType=application/json"`
	Security    NetworkconnectivityProjectsLocationsSpokesCreateSecurity
}

type NetworkconnectivityProjectsLocationsSpokesCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
