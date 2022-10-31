package operations

import (
	"openapi/pkg/models/shared"
)

type CloudprofilerProjectsProfilesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudprofilerProjectsProfilesCreateQueryParams struct {
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

type CloudprofilerProjectsProfilesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateSecurity struct {
	Option1 *CloudprofilerProjectsProfilesCreateSecurityOption1 `security:"option"`
	Option2 *CloudprofilerProjectsProfilesCreateSecurityOption2 `security:"option"`
	Option3 *CloudprofilerProjectsProfilesCreateSecurityOption3 `security:"option"`
}

type CloudprofilerProjectsProfilesCreateRequest struct {
	PathParams  CloudprofilerProjectsProfilesCreatePathParams
	QueryParams CloudprofilerProjectsProfilesCreateQueryParams
	Request     *shared.CreateProfileRequest `request:"mediaType=application/json"`
	Security    CloudprofilerProjectsProfilesCreateSecurity
}

type CloudprofilerProjectsProfilesCreateResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
