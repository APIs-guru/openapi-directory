package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupByPathPathPathParams struct {
	Path  string `pathParam:"style=simple,explode=false,name=path"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupByPathPathRequest struct {
	PathParams GetRealmGroupByPathPathPathParams
}

type GetRealmGroupByPathPathResponse struct {
	ContentType         string
	GroupRepresentation *shared.GroupRepresentation
	StatusCode          int64
}
