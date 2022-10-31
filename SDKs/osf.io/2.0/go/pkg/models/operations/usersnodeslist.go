package operations

type UsersNodesListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UsersNodesListRequest struct {
	PathParams UsersNodesListPathParams
}

type UsersNodesListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
