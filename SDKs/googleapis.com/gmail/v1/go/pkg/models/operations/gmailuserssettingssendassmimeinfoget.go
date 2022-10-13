package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsSendAsSmimeInfoGetPathParams struct {
	ID          string `pathParam:"style=simple,explode=false,name=id"`
	SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsSendAsSmimeInfoGetQueryParams struct {
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

type GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoGetSecurity struct {
	Option1 *GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4 `security:"option"`
	Option5 *GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5 `security:"option"`
}

type GmailUsersSettingsSendAsSmimeInfoGetRequest struct {
	PathParams  GmailUsersSettingsSendAsSmimeInfoGetPathParams
	QueryParams GmailUsersSettingsSendAsSmimeInfoGetQueryParams
	Security    GmailUsersSettingsSendAsSmimeInfoGetSecurity
}

type GmailUsersSettingsSendAsSmimeInfoGetResponse struct {
	ContentType string
	SmimeInfo   *shared.SmimeInfo
	StatusCode  int64
}
