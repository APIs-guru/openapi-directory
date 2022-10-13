package operations

type PostFilesQueryParams struct {
	Hash      *string `queryParam:"style=form,explode=true,name=hash"`
	IsPrivate *bool   `queryParam:"style=form,explode=true,name=isPrivate"`
}

type PostFilesRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostFilesRequestBody struct {
	File PostFilesRequestBodyFile `multipartForm:"file"`
}

type PostFilesRequest struct {
	QueryParams PostFilesQueryParams
	Request     PostFilesRequestBody `request:"mediaType=multipart/form-data"`
}

type PostFilesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
