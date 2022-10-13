package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmComponentsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmComponentsRequest struct {
	PathParams PostRealmComponentsPathParams
	Request    shared.ComponentRepresentation `request:"mediaType=application/json"`
}

type PostRealmComponentsResponse struct {
	ContentType string
	StatusCode  int64
}
