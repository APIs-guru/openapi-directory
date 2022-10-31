package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerFoldersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Parent         *string           `queryParam:"style=form,explode=true,name=parent"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted    *bool             `queryParam:"style=form,explode=true,name=showDeleted"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudresourcemanagerFoldersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerFoldersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerFoldersListSecurity struct {
	Option1 *CloudresourcemanagerFoldersListSecurityOption1 `security:"option"`
	Option2 *CloudresourcemanagerFoldersListSecurityOption2 `security:"option"`
}

type CloudresourcemanagerFoldersListRequest struct {
	QueryParams CloudresourcemanagerFoldersListQueryParams
	Security    CloudresourcemanagerFoldersListSecurity
}

type CloudresourcemanagerFoldersListResponse struct {
	ContentType         string
	ListFoldersResponse *shared.ListFoldersResponse
	StatusCode          int64
}
