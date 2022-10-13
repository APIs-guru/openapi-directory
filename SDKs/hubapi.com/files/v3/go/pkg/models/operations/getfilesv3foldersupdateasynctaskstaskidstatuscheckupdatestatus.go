package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity struct {
	Option1 *GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption1 `security:"option"`
	Option2 *GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption2 `security:"option"`
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
