package operations

import (
	"openapi/pkg/models/shared"
)

type GmailUsersDraftsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GmailUsersDraftsListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeSpamTrash *bool             `queryParam:"style=form,explode=true,name=includeSpamTrash"`
	Key              *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults       *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken        *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Q                *string           `queryParam:"style=form,explode=true,name=q"`
	QuotaUser        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GmailUsersDraftsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GmailUsersDraftsListSecurity struct {
	Option1 *GmailUsersDraftsListSecurityOption1 `security:"option"`
	Option2 *GmailUsersDraftsListSecurityOption2 `security:"option"`
	Option3 *GmailUsersDraftsListSecurityOption3 `security:"option"`
	Option4 *GmailUsersDraftsListSecurityOption4 `security:"option"`
}

type GmailUsersDraftsListRequest struct {
	PathParams  GmailUsersDraftsListPathParams
	QueryParams GmailUsersDraftsListQueryParams
	Security    GmailUsersDraftsListSecurity
}

type GmailUsersDraftsListResponse struct {
	ContentType        string
	ListDraftsResponse *shared.ListDraftsResponse
	StatusCode         int64
}
