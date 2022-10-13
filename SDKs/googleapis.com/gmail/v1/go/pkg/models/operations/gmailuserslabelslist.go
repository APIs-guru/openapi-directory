package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersLabelsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersLabelsListQueryParams struct {
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

type GmailUsersLabelsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsListSecurity struct {
	Option1 *GmailUsersLabelsListSecurityOption1 `security:"option"`
	Option2 *GmailUsersLabelsListSecurityOption2 `security:"option"`
	Option3 *GmailUsersLabelsListSecurityOption3 `security:"option"`
	Option4 *GmailUsersLabelsListSecurityOption4 `security:"option"`
	Option5 *GmailUsersLabelsListSecurityOption5 `security:"option"`
}

type GmailUsersLabelsListRequest struct {
	PathParams  GmailUsersLabelsListPathParams
	QueryParams GmailUsersLabelsListQueryParams
	Security    GmailUsersLabelsListSecurity
}

type GmailUsersLabelsListResponse struct {
	ContentType        string
	ListLabelsResponse *shared.ListLabelsResponse
	StatusCode         int64
}
