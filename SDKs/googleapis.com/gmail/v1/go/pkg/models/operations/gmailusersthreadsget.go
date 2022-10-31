package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersThreadsGetPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersThreadsGetFormatEnum string

const (
	GmailUsersThreadsGetFormatEnumFull     GmailUsersThreadsGetFormatEnum = "full"
	GmailUsersThreadsGetFormatEnumMetadata GmailUsersThreadsGetFormatEnum = "metadata"
	GmailUsersThreadsGetFormatEnumMinimal  GmailUsersThreadsGetFormatEnum = "minimal"
)

type GmailUsersThreadsGetQueryParams struct {
	DollarXgafv     *shared.XgafvEnum               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                 `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                         `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string                         `queryParam:"style=form,explode=true,name=fields"`
	Format          *GmailUsersThreadsGetFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key             *string                         `queryParam:"style=form,explode=true,name=key"`
	MetadataHeaders []string                        `queryParam:"style=form,explode=true,name=metadataHeaders"`
	OauthToken      *string                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string                         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GmailUsersThreadsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersThreadsGetSecurity struct {
	Option1 *GmailUsersThreadsGetSecurityOption1 `security:"option"`
	Option2 *GmailUsersThreadsGetSecurityOption2 `security:"option"`
	Option3 *GmailUsersThreadsGetSecurityOption3 `security:"option"`
	Option4 *GmailUsersThreadsGetSecurityOption4 `security:"option"`
	Option5 *GmailUsersThreadsGetSecurityOption5 `security:"option"`
	Option6 *GmailUsersThreadsGetSecurityOption6 `security:"option"`
	Option7 *GmailUsersThreadsGetSecurityOption7 `security:"option"`
}

type GmailUsersThreadsGetRequest struct {
	PathParams  GmailUsersThreadsGetPathParams
	QueryParams GmailUsersThreadsGetQueryParams
	Security    GmailUsersThreadsGetSecurity
}

type GmailUsersThreadsGetResponse struct {
	ContentType string
	StatusCode  int64
	Thread      *shared.Thread
}
