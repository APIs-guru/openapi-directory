package operations

type CommentsReadPathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=comment_id"`
}

type CommentsReadRequest struct {
	PathParams CommentsReadPathParams
}

type CommentsReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
