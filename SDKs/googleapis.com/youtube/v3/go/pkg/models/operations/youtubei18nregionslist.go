package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeI18nRegionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Hl             *string           `queryParam:"style=form,explode=true,name=hl"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeI18nRegionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nRegionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nRegionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nRegionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nRegionsListSecurity struct {
	Option1 *YoutubeI18nRegionsListSecurityOption1 `security:"option"`
	Option2 *YoutubeI18nRegionsListSecurityOption2 `security:"option"`
	Option3 *YoutubeI18nRegionsListSecurityOption3 `security:"option"`
	Option4 *YoutubeI18nRegionsListSecurityOption4 `security:"option"`
}

type YoutubeI18nRegionsListRequest struct {
	QueryParams YoutubeI18nRegionsListQueryParams
	Security    YoutubeI18nRegionsListSecurity
}

type YoutubeI18nRegionsListResponse struct {
	ContentType            string
	I18nRegionListResponse *shared.I18nRegionListResponse
	StatusCode             int64
}
