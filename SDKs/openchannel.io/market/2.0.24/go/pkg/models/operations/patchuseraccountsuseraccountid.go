package operations

type PatchUserAccountsUserAccountIDPathParams struct {
	UserAccountID string `pathParam:"style=simple,explode=false,name=userAccountId"`
}

type PatchUserAccountsUserAccountIDQueryParams struct {
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
	Email      *string `queryParam:"style=form,explode=true,name=email"`
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	UserID     string  `queryParam:"style=form,explode=true,name=userId"`
}

type PatchUserAccountsUserAccountIDRequest struct {
	PathParams  PatchUserAccountsUserAccountIDPathParams
	QueryParams PatchUserAccountsUserAccountIDQueryParams
}

type PatchUserAccountsUserAccountIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
