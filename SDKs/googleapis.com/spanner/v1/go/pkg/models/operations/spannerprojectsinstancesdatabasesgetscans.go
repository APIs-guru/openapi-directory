package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesDatabasesGetScansPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type SpannerProjectsInstancesDatabasesGetScansViewEnum string

const (
	SpannerProjectsInstancesDatabasesGetScansViewEnumViewUnspecified SpannerProjectsInstancesDatabasesGetScansViewEnum = "VIEW_UNSPECIFIED"
	SpannerProjectsInstancesDatabasesGetScansViewEnumSummary         SpannerProjectsInstancesDatabasesGetScansViewEnum = "SUMMARY"
	SpannerProjectsInstancesDatabasesGetScansViewEnumFull            SpannerProjectsInstancesDatabasesGetScansViewEnum = "FULL"
)

type SpannerProjectsInstancesDatabasesGetScansQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                            `queryParam:"style=form,explode=true,name=callback"`
	EndTime        *string                                            `queryParam:"style=form,explode=true,name=endTime"`
	Fields         *string                                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime      *string                                            `queryParam:"style=form,explode=true,name=startTime"`
	UploadType     *string                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *SpannerProjectsInstancesDatabasesGetScansViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type SpannerProjectsInstancesDatabasesGetScansSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesGetScansSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesGetScansSecurity struct {
	Option1 *SpannerProjectsInstancesDatabasesGetScansSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesDatabasesGetScansSecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesDatabasesGetScansRequest struct {
	PathParams  SpannerProjectsInstancesDatabasesGetScansPathParams
	QueryParams SpannerProjectsInstancesDatabasesGetScansQueryParams
	Security    SpannerProjectsInstancesDatabasesGetScansSecurity
}

type SpannerProjectsInstancesDatabasesGetScansResponse struct {
	ContentType string
	Scan        *shared.Scan
	StatusCode  int64
}
