package operations

import (
	"openapi/pkg/models/shared"
)

type RenameVirtualFolderQueryParams struct {
	Name           *string `queryParam:"style=form,explode=true,name=name"`
	NewName        *string `queryParam:"style=form,explode=true,name=newName"`
	RefreshLibrary *bool   `queryParam:"style=form,explode=true,name=refreshLibrary"`
}

type RenameVirtualFolderSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RenameVirtualFolderRequest struct {
	QueryParams RenameVirtualFolderQueryParams
	Security    RenameVirtualFolderSecurity
}

type RenameVirtualFolderResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
