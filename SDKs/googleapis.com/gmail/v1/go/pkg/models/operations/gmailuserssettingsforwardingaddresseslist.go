package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsForwardingAddressesListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsForwardingAddressesListQueryParams struct {
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

type GmailUsersSettingsForwardingAddressesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesListSecurity struct {
	Option1 *GmailUsersSettingsForwardingAddressesListSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsForwardingAddressesListSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsForwardingAddressesListSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsForwardingAddressesListSecurityOption4 `security:"option"`
}

type GmailUsersSettingsForwardingAddressesListRequest struct {
	PathParams  GmailUsersSettingsForwardingAddressesListPathParams
	QueryParams GmailUsersSettingsForwardingAddressesListQueryParams
	Security    GmailUsersSettingsForwardingAddressesListSecurity
}

type GmailUsersSettingsForwardingAddressesListResponse struct {
	ContentType                     string
	ListForwardingAddressesResponse *shared.ListForwardingAddressesResponse
	StatusCode                      int64
}
