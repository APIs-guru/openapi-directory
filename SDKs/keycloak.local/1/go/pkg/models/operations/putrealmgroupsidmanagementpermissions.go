package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmGroupsIDManagementPermissionsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmGroupsIDManagementPermissionsRequest struct {
	PathParams PutRealmGroupsIDManagementPermissionsPathParams
	Request    shared.ManagementPermissionReference `request:"mediaType=application/json"`
}

type PutRealmGroupsIDManagementPermissionsResponse struct {
	ContentType                   string
	ManagementPermissionReference *shared.ManagementPermissionReference
	StatusCode                    int64
}
