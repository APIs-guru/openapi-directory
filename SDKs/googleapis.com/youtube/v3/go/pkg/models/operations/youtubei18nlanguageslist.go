package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeI18nLanguagesListQueryParams struct {
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

type YoutubeI18nLanguagesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nLanguagesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nLanguagesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nLanguagesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeI18nLanguagesListSecurity struct {
	Option1 *YoutubeI18nLanguagesListSecurityOption1 `security:"option"`
	Option2 *YoutubeI18nLanguagesListSecurityOption2 `security:"option"`
	Option3 *YoutubeI18nLanguagesListSecurityOption3 `security:"option"`
	Option4 *YoutubeI18nLanguagesListSecurityOption4 `security:"option"`
}

type YoutubeI18nLanguagesListRequest struct {
	QueryParams YoutubeI18nLanguagesListQueryParams
	Security    YoutubeI18nLanguagesListSecurity
}

type YoutubeI18nLanguagesListResponse struct {
	ContentType              string
	I18nLanguageListResponse *shared.I18nLanguageListResponse
	StatusCode               int64
}
