package operations

type GetIconPathParams struct {
	FileName string `pathParam:"style=simple,explode=false,name=fileName"`
}

type GetIconRequest struct {
	PathParams GetIconPathParams
}

type GetIconResponse struct {
	ContentType                         string
	GetIcon200ImageWildcardBinaryString []byte
	ProblemDetails                      map[string]interface{}
	StatusCode                          int64
}
