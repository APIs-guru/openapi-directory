package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsSendAsUpdatePathParams struct {
	SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsSendAsUpdateQueryParams struct {
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

type GmailUsersSettingsSendAsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsUpdateSecurity struct {
	Option1 *GmailUsersSettingsSendAsUpdateSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsSendAsUpdateSecurityOption2 `security:"option"`
}

type GmailUsersSettingsSendAsUpdateRequest struct {
	PathParams  GmailUsersSettingsSendAsUpdatePathParams
	QueryParams GmailUsersSettingsSendAsUpdateQueryParams
	Request     *shared.SendAs `request:"mediaType=application/json"`
	Security    GmailUsersSettingsSendAsUpdateSecurity
}

type GmailUsersSettingsSendAsUpdateResponse struct {
	ContentType string
	SendAs      *shared.SendAs
	StatusCode  int64
}
