package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsGetImapPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsGetImapQueryParams struct {
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

type GmailUsersSettingsGetImapSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsGetImapSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsGetImapSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsGetImapSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsGetImapSecurity struct {
	Option1 *GmailUsersSettingsGetImapSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsGetImapSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsGetImapSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsGetImapSecurityOption4 `security:"option"`
}

type GmailUsersSettingsGetImapRequest struct {
	PathParams  GmailUsersSettingsGetImapPathParams
	QueryParams GmailUsersSettingsGetImapQueryParams
	Security    GmailUsersSettingsGetImapSecurity
}

type GmailUsersSettingsGetImapResponse struct {
	ContentType  string
	ImapSettings *shared.ImapSettings
	StatusCode   int64
}
