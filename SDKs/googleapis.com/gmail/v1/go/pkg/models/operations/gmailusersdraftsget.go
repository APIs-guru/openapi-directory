package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersDraftsGetPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersDraftsGetFormatEnum string

const (
	GmailUsersDraftsGetFormatEnumMinimal  GmailUsersDraftsGetFormatEnum = "minimal"
	GmailUsersDraftsGetFormatEnumFull     GmailUsersDraftsGetFormatEnum = "full"
	GmailUsersDraftsGetFormatEnumRaw      GmailUsersDraftsGetFormatEnum = "raw"
	GmailUsersDraftsGetFormatEnumMetadata GmailUsersDraftsGetFormatEnum = "metadata"
)

type GmailUsersDraftsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum              `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                        `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                        `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                        `queryParam:"style=form,explode=true,name=fields"`
	Format         *GmailUsersDraftsGetFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key            *string                        `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                        `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                        `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GmailUsersDraftsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsGetSecurity struct {
	Option1 *GmailUsersDraftsGetSecurityOption1 `security:"option"`
	Option2 *GmailUsersDraftsGetSecurityOption2 `security:"option"`
	Option3 *GmailUsersDraftsGetSecurityOption3 `security:"option"`
	Option4 *GmailUsersDraftsGetSecurityOption4 `security:"option"`
}

type GmailUsersDraftsGetRequest struct {
	PathParams  GmailUsersDraftsGetPathParams
	QueryParams GmailUsersDraftsGetQueryParams
	Security    GmailUsersDraftsGetSecurity
}

type GmailUsersDraftsGetResponse struct {
	ContentType string
	Draft       *shared.Draft
	StatusCode  int64
}
