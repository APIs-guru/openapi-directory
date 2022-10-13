package operations

import (
	"openapi/pkg/models/shared"
)

type GetVirtualFoldersSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetVirtualFoldersRequest struct {
	Security GetVirtualFoldersSecurity
}

type GetVirtualFoldersResponse struct {
	ContentType        string
	StatusCode         int64
	VirtualFolderInfos []shared.VirtualFolderInfo
}
