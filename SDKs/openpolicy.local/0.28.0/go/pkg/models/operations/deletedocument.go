package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type DeleteDocumentRequest struct {
	PathParams DeleteDocumentPathParams
}

type DeleteDocumentResponse struct {
	FourHundred        *shared.FourHundred
	FourHundredAndFour *shared.FourHundredAndFour
	ContentType        string
	StatusCode         int64
}
