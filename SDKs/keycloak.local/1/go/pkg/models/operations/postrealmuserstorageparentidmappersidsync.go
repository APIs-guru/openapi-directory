package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmUserStorageParentIDMappersIDSyncPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	ParentID string `pathParam:"style=simple,explode=false,name=parentId"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUserStorageParentIDMappersIDSyncQueryParams struct {
	Direction *string `queryParam:"style=form,explode=true,name=direction"`
}

type PostRealmUserStorageParentIDMappersIDSyncRequest struct {
	PathParams  PostRealmUserStorageParentIDMappersIDSyncPathParams
	QueryParams PostRealmUserStorageParentIDMappersIDSyncQueryParams
}

type PostRealmUserStorageParentIDMappersIDSyncResponse struct {
	ContentType           string
	StatusCode            int64
	SynchronizationResult *shared.SynchronizationResult
}
