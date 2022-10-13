package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersDraftsDeletePathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersDraftsDeleteQueryParams struct {
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

type GmailUsersDraftsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsDeleteSecurity struct {
	Option1 *GmailUsersDraftsDeleteSecurityOption1 `security:"option"`
	Option2 *GmailUsersDraftsDeleteSecurityOption2 `security:"option"`
	Option3 *GmailUsersDraftsDeleteSecurityOption3 `security:"option"`
	Option4 *GmailUsersDraftsDeleteSecurityOption4 `security:"option"`
}

type GmailUsersDraftsDeleteRequest struct {
	PathParams  GmailUsersDraftsDeletePathParams
	QueryParams GmailUsersDraftsDeleteQueryParams
	Security    GmailUsersDraftsDeleteSecurity
}

type GmailUsersDraftsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
