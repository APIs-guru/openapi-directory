package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmUserStorageIDSyncPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUserStorageIDSyncQueryParams struct {
	Action *string `queryParam:"style=form,explode=true,name=action"`
}

type PostRealmUserStorageIDSyncRequest struct {
	PathParams  PostRealmUserStorageIDSyncPathParams
	QueryParams PostRealmUserStorageIDSyncQueryParams
}

type PostRealmUserStorageIDSyncResponse struct {
	ContentType           string
	StatusCode            int64
	SynchronizationResult *shared.SynchronizationResult
}
