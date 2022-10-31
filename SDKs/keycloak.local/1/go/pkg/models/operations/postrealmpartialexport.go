package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmPartialExportPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmPartialExportQueryParams struct {
	ExportClients        *bool `queryParam:"style=form,explode=true,name=exportClients"`
	ExportGroupsAndRoles *bool `queryParam:"style=form,explode=true,name=exportGroupsAndRoles"`
}

type PostRealmPartialExportRequest struct {
	PathParams  PostRealmPartialExportPathParams
	QueryParams PostRealmPartialExportQueryParams
}

type PostRealmPartialExportResponse struct {
	ContentType         string
	RealmRepresentation *shared.RealmRepresentation
	StatusCode          int64
}
