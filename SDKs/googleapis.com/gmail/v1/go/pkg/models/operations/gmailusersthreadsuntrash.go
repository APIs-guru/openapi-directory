package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersThreadsUntrashPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersThreadsUntrashQueryParams struct {
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

type GmailUsersThreadsUntrashSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsUntrashSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsUntrashSecurity struct {
	Option1 *GmailUsersThreadsUntrashSecurityOption1 `security:"option"`
	Option2 *GmailUsersThreadsUntrashSecurityOption2 `security:"option"`
}

type GmailUsersThreadsUntrashRequest struct {
	PathParams  GmailUsersThreadsUntrashPathParams
	QueryParams GmailUsersThreadsUntrashQueryParams
	Security    GmailUsersThreadsUntrashSecurity
}

type GmailUsersThreadsUntrashResponse struct {
	ContentType string
	StatusCode  int64
	Thread      *shared.Thread
}
