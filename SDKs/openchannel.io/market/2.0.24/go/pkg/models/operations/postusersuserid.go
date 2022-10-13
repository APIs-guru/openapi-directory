package operations

type PostUsersUserIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUsersUserIDQueryParams struct {
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	Type       *string `queryParam:"style=form,explode=true,name=type"`
	Username   *string `queryParam:"style=form,explode=true,name=username"`
}

type PostUsersUserIDRequest struct {
	PathParams  PostUsersUserIDPathParams
	QueryParams PostUsersUserIDQueryParams
}

type PostUsersUserIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
