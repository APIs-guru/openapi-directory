package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsSendAsSmimeInfoInsertPathParams struct {
	SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsSendAsSmimeInfoInsertQueryParams struct {
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

type GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoInsertSecurity struct {
	Option1 *GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2 `security:"option"`
}

type GmailUsersSettingsSendAsSmimeInfoInsertRequest struct {
	PathParams  GmailUsersSettingsSendAsSmimeInfoInsertPathParams
	QueryParams GmailUsersSettingsSendAsSmimeInfoInsertQueryParams
	Request     *shared.SmimeInfo `request:"mediaType=application/json"`
	Security    GmailUsersSettingsSendAsSmimeInfoInsertSecurity
}

type GmailUsersSettingsSendAsSmimeInfoInsertResponse struct {
	ContentType string
	SmimeInfo   *shared.SmimeInfo
	StatusCode  int64
}
