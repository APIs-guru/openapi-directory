package operations

type GetBlobByIDPathParams struct {
	Filename string `pathParam:"style=simple,explode=false,name=filename"`
	ID       string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBlobByIDRequest struct {
	PathParams GetBlobByIDPathParams
}

type GetBlobByIDResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetBlobByID200ImageWildcardBinaryString []byte
}
