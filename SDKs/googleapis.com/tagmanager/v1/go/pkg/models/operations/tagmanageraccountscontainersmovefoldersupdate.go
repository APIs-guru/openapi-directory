package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersMoveFoldersUpdatePathParams struct {
	AccountID   string `pathParam:"style=simple,explode=false,name=accountId"`
	ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
	FolderID    string `pathParam:"style=simple,explode=false,name=folderId"`
}

type TagmanagerAccountsContainersMoveFoldersUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TagID          []string          `queryParam:"style=form,explode=true,name=tagId"`
	TriggerID      []string          `queryParam:"style=form,explode=true,name=triggerId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VariableID     []string          `queryParam:"style=form,explode=true,name=variableId"`
}

type TagmanagerAccountsContainersMoveFoldersUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersMoveFoldersUpdateRequest struct {
	PathParams  TagmanagerAccountsContainersMoveFoldersUpdatePathParams
	QueryParams TagmanagerAccountsContainersMoveFoldersUpdateQueryParams
	Request     *shared.Folder `request:"mediaType=application/json"`
	Security    TagmanagerAccountsContainersMoveFoldersUpdateSecurity
}

type TagmanagerAccountsContainersMoveFoldersUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
