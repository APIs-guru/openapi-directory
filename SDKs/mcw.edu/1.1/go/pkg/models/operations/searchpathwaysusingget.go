package operations

type SearchPathwaysUsingGetPathParams struct {
	SearchString string `pathParam:"style=simple,explode=false,name=searchString"`
}

type SearchPathwaysUsingGetRequest struct {
	PathParams SearchPathwaysUsingGetPathParams
}

type SearchPathwaysUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
