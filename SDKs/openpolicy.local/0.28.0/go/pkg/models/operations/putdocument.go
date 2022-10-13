package operations

import (
	"openapi/pkg/models/shared"
)

type PutDocumentPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type PutDocumentHeaders struct {
	IfNoneMatch *string `header:"name=If-None-Match"`
}

type PutDocumentRequest struct {
	PathParams PutDocumentPathParams
	Headers    PutDocumentHeaders
}

type PutDocumentResponse struct {
	FourHundred        *shared.FourHundred
	FourHundredAndFour *shared.FourHundredAndFour
	ContentType        string
	StatusCode         int64
}
