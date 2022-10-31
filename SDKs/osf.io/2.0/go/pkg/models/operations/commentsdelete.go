package operations

type CommentsDeletePathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=comment_id"`
}

type CommentsDeleteRequest struct {
	PathParams CommentsDeletePathParams
}

type CommentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
