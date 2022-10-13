package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLPathParams struct {
	Session string `pathParam:"style=simple,explode=false,name=session"`
}

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurity struct {
	Option1 *SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLRequest struct {
	PathParams  SpannerProjectsInstancesDatabasesSessionsExecuteSQLPathParams
	QueryParams SpannerProjectsInstancesDatabasesSessionsExecuteSQLQueryParams
	Request     *shared.ExecuteSQLRequest `request:"mediaType=application/json"`
	Security    SpannerProjectsInstancesDatabasesSessionsExecuteSQLSecurity
}

type SpannerProjectsInstancesDatabasesSessionsExecuteSQLResponse struct {
	ContentType string
	ResultSet   *shared.ResultSet
	StatusCode  int64
}
