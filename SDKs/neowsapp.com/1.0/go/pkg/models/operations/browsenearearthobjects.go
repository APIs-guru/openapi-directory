package operations

import (
	"openapi/pkg/models/shared"
)

type BrowseNearEarthObjectsQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
	Size *int32 `queryParam:"style=form,explode=true,name=size"`
}

type BrowseNearEarthObjectsRequest struct {
	QueryParams BrowseNearEarthObjectsQueryParams
}

type BrowseNearEarthObjectsResponse struct {
	ContentType     string
	NearEarthObject *shared.NearEarthObject
	StatusCode      int64
}
