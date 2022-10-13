package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingSinksCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type LoggingSinksCreateQueryParams struct {
	DollarXgafv          *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken          *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                  *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback             *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields               *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken           *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UniqueWriterIdentity *bool             `queryParam:"style=form,explode=true,name=uniqueWriterIdentity"`
	UploadType           *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol       *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type LoggingSinksCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingSinksCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingSinksCreateSecurity struct {
	Option1 *LoggingSinksCreateSecurityOption1 `security:"option"`
	Option2 *LoggingSinksCreateSecurityOption2 `security:"option"`
}

type LoggingSinksCreateRequest struct {
	PathParams  LoggingSinksCreatePathParams
	QueryParams LoggingSinksCreateQueryParams
	Request     *shared.LogSink `request:"mediaType=application/json"`
	Security    LoggingSinksCreateSecurity
}

type LoggingSinksCreateResponse struct {
	ContentType string
	LogSink     *shared.LogSink
	StatusCode  int64
}
