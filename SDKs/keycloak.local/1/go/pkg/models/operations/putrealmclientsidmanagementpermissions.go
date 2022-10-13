package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmClientsIDManagementPermissionsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmClientsIDManagementPermissionsRequest struct {
	PathParams PutRealmClientsIDManagementPermissionsPathParams
	Request    shared.ManagementPermissionReference `request:"mediaType=application/json"`
}

type PutRealmClientsIDManagementPermissionsResponse struct {
	ContentType                   string
	ManagementPermissionReference *shared.ManagementPermissionReference
	StatusCode                    int64
}
