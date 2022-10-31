package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeAnalyticsGroupsUpdateQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeAnalyticsGroupsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsGroupsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsGroupsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsGroupsUpdateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsGroupsUpdateSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAnalyticsGroupsUpdateSecurity struct {
	Option1 *YoutubeAnalyticsGroupsUpdateSecurityOption1 `security:"option"`
	Option2 *YoutubeAnalyticsGroupsUpdateSecurityOption2 `security:"option"`
	Option3 *YoutubeAnalyticsGroupsUpdateSecurityOption3 `security:"option"`
	Option4 *YoutubeAnalyticsGroupsUpdateSecurityOption4 `security:"option"`
	Option5 *YoutubeAnalyticsGroupsUpdateSecurityOption5 `security:"option"`
}

type YoutubeAnalyticsGroupsUpdateRequest struct {
	QueryParams YoutubeAnalyticsGroupsUpdateQueryParams
	Request     *shared.Group `request:"mediaType=application/json"`
	Security    YoutubeAnalyticsGroupsUpdateSecurity
}

type YoutubeAnalyticsGroupsUpdateResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
