package operations

import (
	"openapi/pkg/models/shared"
)

type CloudprofilerProjectsProfilesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudprofilerProjectsProfilesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudprofilerProjectsProfilesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesPatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesPatchSecurity struct {
	Option1 *CloudprofilerProjectsProfilesPatchSecurityOption1 `security:"option"`
	Option2 *CloudprofilerProjectsProfilesPatchSecurityOption2 `security:"option"`
	Option3 *CloudprofilerProjectsProfilesPatchSecurityOption3 `security:"option"`
}

type CloudprofilerProjectsProfilesPatchRequest struct {
	PathParams  CloudprofilerProjectsProfilesPatchPathParams
	QueryParams CloudprofilerProjectsProfilesPatchQueryParams
	Request     *shared.ProfileInput `request:"mediaType=application/json"`
	Security    CloudprofilerProjectsProfilesPatchSecurity
}

type CloudprofilerProjectsProfilesPatchResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
