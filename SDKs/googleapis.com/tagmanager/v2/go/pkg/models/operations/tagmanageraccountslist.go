package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsListQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeGoogleTags *bool             `queryParam:"style=form,explode=true,name=includeGoogleTags"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken         *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsListSecurity struct {
	Option1 *TagmanagerAccountsListSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsListSecurityOption2 `security:"option"`
	Option3 *TagmanagerAccountsListSecurityOption3 `security:"option"`
}

type TagmanagerAccountsListRequest struct {
	QueryParams TagmanagerAccountsListQueryParams
	Security    TagmanagerAccountsListSecurity
}

type TagmanagerAccountsListResponse struct {
	ContentType          string
	ListAccountsResponse *shared.ListAccountsResponse
	StatusCode           int64
}
