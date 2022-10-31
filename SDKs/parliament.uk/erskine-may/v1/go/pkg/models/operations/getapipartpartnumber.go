package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIPartPartNumberPathParams struct {
	PartNumber int32 `pathParam:"style=simple,explode=false,name=partNumber"`
}

type GetAPIPartPartNumberRequest struct {
	PathParams GetAPIPartPartNumberPathParams
}

type GetAPIPartPartNumberResponse struct {
	Body           []byte
	ContentType    string
	ErskineMayPart *shared.ErskineMayPart
	StatusCode     int64
}
