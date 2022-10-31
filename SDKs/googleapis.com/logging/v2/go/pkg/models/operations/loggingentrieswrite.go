package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingEntriesWriteQueryParams struct {
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

type LoggingEntriesWriteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesWriteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesWriteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingEntriesWriteSecurity struct {
	Option1 *LoggingEntriesWriteSecurityOption1 `security:"option"`
	Option2 *LoggingEntriesWriteSecurityOption2 `security:"option"`
	Option3 *LoggingEntriesWriteSecurityOption3 `security:"option"`
}

type LoggingEntriesWriteRequest struct {
	QueryParams LoggingEntriesWriteQueryParams
	Request     *shared.WriteLogEntriesRequest `request:"mediaType=application/json"`
	Security    LoggingEntriesWriteSecurity
}

type LoggingEntriesWriteResponse struct {
	ContentType             string
	StatusCode              int64
	WriteLogEntriesResponse map[string]interface{}
}
