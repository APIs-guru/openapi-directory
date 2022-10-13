package operations

import (
	"openapi/pkg/models/shared"
)

type CloudprofilerProjectsProfilesCreateOfflinePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudprofilerProjectsProfilesCreateOfflineQueryParams struct {
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

type CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudprofilerProjectsProfilesCreateOfflineSecurity struct {
	Option1 *CloudprofilerProjectsProfilesCreateOfflineSecurityOption1 `security:"option"`
	Option2 *CloudprofilerProjectsProfilesCreateOfflineSecurityOption2 `security:"option"`
	Option3 *CloudprofilerProjectsProfilesCreateOfflineSecurityOption3 `security:"option"`
}

type CloudprofilerProjectsProfilesCreateOfflineRequest struct {
	PathParams  CloudprofilerProjectsProfilesCreateOfflinePathParams
	QueryParams CloudprofilerProjectsProfilesCreateOfflineQueryParams
	Request     *shared.Profile `request:"mediaType=application/json"`
	Security    CloudprofilerProjectsProfilesCreateOfflineSecurity
}

type CloudprofilerProjectsProfilesCreateOfflineResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
