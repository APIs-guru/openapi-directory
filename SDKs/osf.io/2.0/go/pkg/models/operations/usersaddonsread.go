package operations

type UsersAddonsReadPathParams struct {
	Provider string `pathParam:"style=simple,explode=false,name=provider"`
	UserID   string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UsersAddonsReadRequest struct {
	PathParams UsersAddonsReadPathParams
}

type UsersAddonsReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
