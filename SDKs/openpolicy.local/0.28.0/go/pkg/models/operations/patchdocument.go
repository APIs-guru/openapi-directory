package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDocumentPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type PatchDocumentRequest struct {
	PathParams PatchDocumentPathParams
	Request    []shared.PatchesSchema `request:"mediaType=application/json"`
}

type PatchDocumentResponse struct {
	FourHundred        *shared.FourHundred
	FourHundredAndFour *shared.FourHundredAndFour
	ContentType        string
	StatusCode         int64
}
