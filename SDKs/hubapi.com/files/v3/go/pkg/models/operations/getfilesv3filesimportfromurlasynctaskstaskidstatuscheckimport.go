package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportRequest struct {
	PathParams GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams
	Security   GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse struct {
	Body               []byte
	ContentType        string
	FileActionResponse *shared.FileActionResponse
	StatusCode         int64
}
