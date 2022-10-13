package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsFiltersListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsFiltersListQueryParams struct {
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

type GmailUsersSettingsFiltersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsFiltersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsFiltersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsFiltersListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsFiltersListSecurity struct {
	Option1 *GmailUsersSettingsFiltersListSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsFiltersListSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsFiltersListSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsFiltersListSecurityOption4 `security:"option"`
}

type GmailUsersSettingsFiltersListRequest struct {
	PathParams  GmailUsersSettingsFiltersListPathParams
	QueryParams GmailUsersSettingsFiltersListQueryParams
	Security    GmailUsersSettingsFiltersListSecurity
}

type GmailUsersSettingsFiltersListResponse struct {
	ContentType         string
	ListFiltersResponse *shared.ListFiltersResponse
	StatusCode          int64
}
