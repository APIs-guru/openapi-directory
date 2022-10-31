package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams struct {
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

type TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest struct {
	PathParams  TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams
	QueryParams TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams
	Request     *shared.Folder `request:"mediaType=application/json"`
	Security    TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity
}

type TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse struct {
	ContentType string
	StatusCode  int64
}
