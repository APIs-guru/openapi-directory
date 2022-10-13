package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersVersionHeadersListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersVersionHeadersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeDeleted *bool             `queryParam:"style=form,explode=true,name=includeDeleted"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersVersionHeadersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionHeadersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionHeadersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersVersionHeadersListSecurity struct {
	Option1 *TagmanagerAccountsContainersVersionHeadersListSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersVersionHeadersListSecurityOption2 `security:"option"`
	Option3 *TagmanagerAccountsContainersVersionHeadersListSecurityOption3 `security:"option"`
}

type TagmanagerAccountsContainersVersionHeadersListRequest struct {
	PathParams  TagmanagerAccountsContainersVersionHeadersListPathParams
	QueryParams TagmanagerAccountsContainersVersionHeadersListQueryParams
	Security    TagmanagerAccountsContainersVersionHeadersListSecurity
}

type TagmanagerAccountsContainersVersionHeadersListResponse struct {
	ContentType                   string
	ListContainerVersionsResponse *shared.ListContainerVersionsResponse
	StatusCode                    int64
}
