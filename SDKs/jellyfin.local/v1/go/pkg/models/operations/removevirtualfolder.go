package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVirtualFolderQueryParams struct {
	Name           *string `queryParam:"style=form,explode=true,name=name"`
	RefreshLibrary *bool   `queryParam:"style=form,explode=true,name=refreshLibrary"`
}

type RemoveVirtualFolderSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RemoveVirtualFolderRequest struct {
	QueryParams RemoveVirtualFolderQueryParams
	Security    RemoveVirtualFolderSecurity
}

type RemoveVirtualFolderResponse struct {
	ContentType string
	StatusCode  int64
}
