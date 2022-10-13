package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TestID         *string           `queryParam:"style=form,explode=true,name=testId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest struct {
	PathParams  NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams
	QueryParams NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams
	Request     *shared.ConnectivityTest `request:"mediaType=application/json"`
	Security    NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
