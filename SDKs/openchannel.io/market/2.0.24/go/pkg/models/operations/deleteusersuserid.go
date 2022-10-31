package operations

type DeleteUsersUserIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUsersUserIDRequest struct {
	PathParams DeleteUsersUserIDPathParams
}

type DeleteUsersUserIDResponse struct {
	ContentType string
	StatusCode  int64
}
