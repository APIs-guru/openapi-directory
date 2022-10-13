package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsGenerateRandomBytesPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
}

type CloudkmsProjectsLocationsGenerateRandomBytesQueryParams struct {
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

type CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsGenerateRandomBytesSecurity struct {
	Option1 *CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsGenerateRandomBytesRequest struct {
	PathParams  CloudkmsProjectsLocationsGenerateRandomBytesPathParams
	QueryParams CloudkmsProjectsLocationsGenerateRandomBytesQueryParams
	Request     *shared.GenerateRandomBytesRequest `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsGenerateRandomBytesSecurity
}

type CloudkmsProjectsLocationsGenerateRandomBytesResponse struct {
	ContentType                 string
	GenerateRandomBytesResponse *shared.GenerateRandomBytesResponse
	StatusCode                  int64
}
