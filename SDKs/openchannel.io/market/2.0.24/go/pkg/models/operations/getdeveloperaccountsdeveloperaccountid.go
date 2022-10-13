package operations

type GetDeveloperAccountsDeveloperAccountIDPathParams struct {
	DeveloperAccountID string `pathParam:"style=simple,explode=false,name=developerAccountId"`
}

type GetDeveloperAccountsDeveloperAccountIDRequest struct {
	PathParams GetDeveloperAccountsDeveloperAccountIDPathParams
}

type GetDeveloperAccountsDeveloperAccountIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
