package operations

import (
	"openapi/pkg/models/shared"
)

type UploadsCreateRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UploadsCreateRequestBody struct {
	File UploadsCreateRequestBodyFile `multipartForm:"file"`
}

type UploadsCreateRequest struct {
	Request UploadsCreateRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadsCreateResponse struct {
	ContentType  string
	FileResponse *shared.FileResponse
	StatusCode   int64
}
