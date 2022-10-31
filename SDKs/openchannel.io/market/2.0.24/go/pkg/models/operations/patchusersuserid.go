package operations

type PatchUsersUserIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PatchUsersUserIDQueryParams struct {
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	Type       *string `queryParam:"style=form,explode=true,name=type"`
	Username   *string `queryParam:"style=form,explode=true,name=username"`
}

type PatchUsersUserIDRequest struct {
	PathParams  PatchUsersUserIDPathParams
	QueryParams PatchUsersUserIDQueryParams
}

type PatchUsersUserIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
