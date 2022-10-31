package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesDatabasesGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams struct {
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

type SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesDatabasesGetIamPolicySecurity struct {
	Option1 *SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesDatabasesGetIamPolicyRequest struct {
	PathParams  SpannerProjectsInstancesDatabasesGetIamPolicyPathParams
	QueryParams SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams
	Request     *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
	Security    SpannerProjectsInstancesDatabasesGetIamPolicySecurity
}

type SpannerProjectsInstancesDatabasesGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
