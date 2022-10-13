package operations

type PostUserAccountsUserAccountIDPathParams struct {
	UserAccountID string `pathParam:"style=simple,explode=false,name=userAccountId"`
}

type PostUserAccountsUserAccountIDQueryParams struct {
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	UserID     string  `queryParam:"style=form,explode=true,name=userId"`
}

type PostUserAccountsUserAccountIDRequest struct {
	PathParams  PostUserAccountsUserAccountIDPathParams
	QueryParams PostUserAccountsUserAccountIDQueryParams
}

type PostUserAccountsUserAccountIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
