package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams struct {
	Session string `pathParam:"style=simple,explode=false,name=session"`
}

type SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity struct {
	Option1 *SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest struct {
	PathParams  SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams
	QueryParams SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams
	Request     *shared.PartitionReadRequest `request:"mediaType=application/json"`
	Security    SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity
}

type SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse struct {
	ContentType       string
	PartitionResponse *shared.PartitionResponse
	StatusCode        int64
}
