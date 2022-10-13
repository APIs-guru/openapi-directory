package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsLocationsOperationsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type LoggingProjectsLocationsOperationsGetQueryParams struct {
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

type LoggingProjectsLocationsOperationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsOperationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsOperationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsOperationsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsOperationsGetSecurity struct {
	Option1 *LoggingProjectsLocationsOperationsGetSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsLocationsOperationsGetSecurityOption2 `security:"option"`
	Option3 *LoggingProjectsLocationsOperationsGetSecurityOption3 `security:"option"`
	Option4 *LoggingProjectsLocationsOperationsGetSecurityOption4 `security:"option"`
}

type LoggingProjectsLocationsOperationsGetRequest struct {
	PathParams  LoggingProjectsLocationsOperationsGetPathParams
	QueryParams LoggingProjectsLocationsOperationsGetQueryParams
	Security    LoggingProjectsLocationsOperationsGetSecurity
}

type LoggingProjectsLocationsOperationsGetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
