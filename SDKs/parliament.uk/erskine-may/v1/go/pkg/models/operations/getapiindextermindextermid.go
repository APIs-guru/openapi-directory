package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIIndexTermIndexTermIDPathParams struct {
	IndexTermID int32 `pathParam:"style=simple,explode=false,name=indexTermId"`
}

type GetAPIIndexTermIndexTermIDRequest struct {
	PathParams GetAPIIndexTermIndexTermIDPathParams
}

type GetAPIIndexTermIndexTermIDResponse struct {
	Body                []byte
	ContentType         string
	ErskineMayIndexTerm *shared.ErskineMayIndexTerm
	StatusCode          int64
}
