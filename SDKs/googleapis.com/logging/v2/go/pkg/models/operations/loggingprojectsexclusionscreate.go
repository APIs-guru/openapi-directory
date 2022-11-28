package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsExclusionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type LoggingProjectsExclusionsCreateQueryParams struct {
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

type LoggingProjectsExclusionsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsExclusionsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsExclusionsCreateSecurity struct {
	Option1 *LoggingProjectsExclusionsCreateSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsExclusionsCreateSecurityOption2 `security:"option"`
}

type LoggingProjectsExclusionsCreateRequest struct {
	PathParams  LoggingProjectsExclusionsCreatePathParams
	QueryParams LoggingProjectsExclusionsCreateQueryParams
	Request     *shared.LogExclusionInput `request:"mediaType=application/json"`
	Security    LoggingProjectsExclusionsCreateSecurity
}

type LoggingProjectsExclusionsCreateResponse struct {
	ContentType  string
	LogExclusion *shared.LogExclusion
	StatusCode   int64
}
