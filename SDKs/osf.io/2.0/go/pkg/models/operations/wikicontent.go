package operations

type WikiContentPathParams struct {
	WikiID string `pathParam:"style=simple,explode=false,name=wiki_id"`
}

type WikiContentRequest struct {
	PathParams WikiContentPathParams
}

type WikiContentResponse struct {
	ContentType string
	StatusCode  int64
}
