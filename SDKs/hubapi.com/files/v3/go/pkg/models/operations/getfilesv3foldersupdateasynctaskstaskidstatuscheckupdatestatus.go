package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusRequest struct {
	PathParams GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams
	Security   GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusResponse struct {
	Body                 []byte
	ContentType          string
	FolderActionResponse *shared.FolderActionResponse
	StatusCode           int64
}
