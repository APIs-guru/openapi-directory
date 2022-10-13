package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersSettingsForwardingAddressesGetPathParams struct {
	ForwardingEmail string `pathParam:"style=simple,explode=false,name=forwardingEmail"`
	UserID          string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersSettingsForwardingAddressesGetQueryParams struct {
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

type GmailUsersSettingsForwardingAddressesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersSettingsForwardingAddressesGetSecurity struct {
	Option1 *GmailUsersSettingsForwardingAddressesGetSecurityOption1 `security:"option"`
	Option2 *GmailUsersSettingsForwardingAddressesGetSecurityOption2 `security:"option"`
	Option3 *GmailUsersSettingsForwardingAddressesGetSecurityOption3 `security:"option"`
	Option4 *GmailUsersSettingsForwardingAddressesGetSecurityOption4 `security:"option"`
}

type GmailUsersSettingsForwardingAddressesGetRequest struct {
	PathParams  GmailUsersSettingsForwardingAddressesGetPathParams
	QueryParams GmailUsersSettingsForwardingAddressesGetQueryParams
	Security    GmailUsersSettingsForwardingAddressesGetSecurity
}

type GmailUsersSettingsForwardingAddressesGetResponse struct {
	ContentType       string
	ForwardingAddress *shared.ForwardingAddress
	StatusCode        int64
}
