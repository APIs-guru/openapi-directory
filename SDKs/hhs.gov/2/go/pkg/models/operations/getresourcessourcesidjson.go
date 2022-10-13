package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesSourcesIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesSourcesIDJSONRequest struct {
	PathParams GetResourcesSourcesIDJSONPathParams
}

type GetResourcesSourcesIDJSONResponse struct {
	ContentType    string
	SourceWrappeds []shared.SourceWrapped
	StatusCode     int64
}
