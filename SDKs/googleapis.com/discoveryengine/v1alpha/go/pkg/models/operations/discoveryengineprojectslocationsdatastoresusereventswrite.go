package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams struct {
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

type DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest struct {
	PathParams  DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams
	QueryParams DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams
	Request     *shared.GoogleCloudDiscoveryengineV1alphaUserEvent `request:"mediaType=application/json"`
	Security    DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity
}

type DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse struct {
	ContentType                                string
	GoogleCloudDiscoveryengineV1alphaUserEvent *shared.GoogleCloudDiscoveryengineV1alphaUserEvent
	StatusCode                                 int64
}
