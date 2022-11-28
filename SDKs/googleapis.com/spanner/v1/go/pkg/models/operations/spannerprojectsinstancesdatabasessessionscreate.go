package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesDatabasesSessionsCreatePathParams struct {
	Database string `pathParam:"style=simple,explode=false,name=database"`
}

type SpannerProjectsInstancesDatabasesSessionsCreateQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsCreateSecurity struct {
	Option1 *SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesDatabasesSessionsCreateSecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesDatabasesSessionsCreateRequest struct {
	PathParams  SpannerProjectsInstancesDatabasesSessionsCreatePathParams
	QueryParams SpannerProjectsInstancesDatabasesSessionsCreateQueryParams
	Request     *shared.CreateSessionRequestInput `request:"mediaType=application/json"`
	Security    SpannerProjectsInstancesDatabasesSessionsCreateSecurity
}

type SpannerProjectsInstancesDatabasesSessionsCreateResponse struct {
	ContentType string
	Session     *shared.Session
	StatusCode  int64
}
