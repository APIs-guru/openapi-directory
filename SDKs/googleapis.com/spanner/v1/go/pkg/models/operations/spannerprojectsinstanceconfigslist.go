package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstanceConfigsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type SpannerProjectsInstanceConfigsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SpannerProjectsInstanceConfigsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstanceConfigsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstanceConfigsListSecurity struct {
	Option1 *SpannerProjectsInstanceConfigsListSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstanceConfigsListSecurityOption2 `security:"option"`
}

type SpannerProjectsInstanceConfigsListRequest struct {
	PathParams  SpannerProjectsInstanceConfigsListPathParams
	QueryParams SpannerProjectsInstanceConfigsListQueryParams
	Security    SpannerProjectsInstanceConfigsListSecurity
}

type SpannerProjectsInstanceConfigsListResponse struct {
	ContentType                 string
	ListInstanceConfigsResponse *shared.ListInstanceConfigsResponse
	StatusCode                  int64
}
