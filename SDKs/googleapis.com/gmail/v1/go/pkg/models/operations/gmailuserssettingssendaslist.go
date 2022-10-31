package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsSendAsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsSendAsListQueryParams struct {
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

type GmailUsersSettingsSendAsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsListSecurity struct {
	Option1 *GmailUsersSettingsSendAsListSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsSendAsListSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsSendAsListSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsSendAsListSecurityOption4 `security:"option"`
}

type GmailUsersSettingsSendAsListRequest struct {
	PathParams  GmailUsersSettingsSendAsListPathParams
	QueryParams GmailUsersSettingsSendAsListQueryParams
	Security    GmailUsersSettingsSendAsListSecurity
}

type GmailUsersSettingsSendAsListResponse struct {
	ContentType        string
	ListSendAsResponse *shared.ListSendAsResponse
	StatusCode         int64
}
