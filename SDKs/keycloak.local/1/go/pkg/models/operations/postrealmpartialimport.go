package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmPartialImportPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmPartialImportRequest struct {
	PathParams PostRealmPartialImportPathParams
	Request    shared.PartialImportRepresentation `request:"mediaType=application/json"`
}

type PostRealmPartialImportResponse struct {
	ContentType string
	StatusCode  int64
}
