package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsDelegatesListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsDelegatesListQueryParams struct {
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

type GmailUsersSettingsDelegatesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsDelegatesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsDelegatesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsDelegatesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsDelegatesListSecurity struct {
	Option1 *GmailUsersSettingsDelegatesListSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsDelegatesListSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsDelegatesListSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsDelegatesListSecurityOption4 `security:"option"`
}

type GmailUsersSettingsDelegatesListRequest struct {
	PathParams  GmailUsersSettingsDelegatesListPathParams
	QueryParams GmailUsersSettingsDelegatesListQueryParams
	Security    GmailUsersSettingsDelegatesListSecurity
}

type GmailUsersSettingsDelegatesListResponse struct {
	ContentType           string
	ListDelegatesResponse *shared.ListDelegatesResponse
	StatusCode            int64
}
