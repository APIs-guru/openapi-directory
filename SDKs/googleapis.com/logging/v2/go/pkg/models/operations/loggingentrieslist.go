package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingEntriesListQueryParams struct {
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

type LoggingEntriesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesListSecurity struct {
	Option1 *LoggingEntriesListSecurityOption1 `security:"option"`
	Option2 *LoggingEntriesListSecurityOption2 `security:"option"`
	Option3 *LoggingEntriesListSecurityOption3 `security:"option"`
	Option4 *LoggingEntriesListSecurityOption4 `security:"option"`
}

type LoggingEntriesListRequest struct {
	QueryParams LoggingEntriesListQueryParams
	Request     *shared.ListLogEntriesRequest `request:"mediaType=application/json"`
	Security    LoggingEntriesListSecurity
}

type LoggingEntriesListResponse struct {
	ContentType            string
	ListLogEntriesResponse *shared.ListLogEntriesResponse
	StatusCode             int64
}
