package operations

type CommentsPutPathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=comment_id"`
}

type CommentsPutRequest struct {
	PathParams CommentsPutPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CommentsPutResponse struct {
	ContentType string
	StatusCode  int64
}
