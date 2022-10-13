package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersLabelsCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersLabelsCreateQueryParams struct {
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

type GmailUsersLabelsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersLabelsCreateSecurity struct {
	Option1 *GmailUsersLabelsCreateSecurityOption1 `security:"option"`
	Option2 *GmailUsersLabelsCreateSecurityOption2 `security:"option"`
	Option3 *GmailUsersLabelsCreateSecurityOption3 `security:"option"`
}

type GmailUsersLabelsCreateRequest struct {
	PathParams  GmailUsersLabelsCreatePathParams
	QueryParams GmailUsersLabelsCreateQueryParams
	Request     *shared.Label `request:"mediaType=application/json"`
	Security    GmailUsersLabelsCreateSecurity
}

type GmailUsersLabelsCreateResponse struct {
	ContentType string
	Label       *shared.Label
	StatusCode  int64
}
