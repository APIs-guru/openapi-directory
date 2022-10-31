package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsSendAsSmimeInfoListPathParams struct {
	SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsSendAsSmimeInfoListQueryParams struct {
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

type GmailUsersSettingsSendAsSmimeInfoListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsSendAsSmimeInfoListSecurity struct {
	Option1 *GmailUsersSettingsSendAsSmimeInfoListSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsSendAsSmimeInfoListSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsSendAsSmimeInfoListSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsSendAsSmimeInfoListSecurityOption4 `security:"option"`
	Option5 *GmailUsersSettingsSendAsSmimeInfoListSecurityOption5 `security:"option"`
}

type GmailUsersSettingsSendAsSmimeInfoListRequest struct {
	PathParams  GmailUsersSettingsSendAsSmimeInfoListPathParams
	QueryParams GmailUsersSettingsSendAsSmimeInfoListQueryParams
	Security    GmailUsersSettingsSendAsSmimeInfoListSecurity
}

type GmailUsersSettingsSendAsSmimeInfoListResponse struct {
	ContentType           string
	ListSmimeInfoResponse *shared.ListSmimeInfoResponse
	StatusCode            int64
}
