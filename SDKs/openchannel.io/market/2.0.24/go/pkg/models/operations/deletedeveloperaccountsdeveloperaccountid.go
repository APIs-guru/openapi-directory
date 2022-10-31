package operations

type DeleteDeveloperAccountsDeveloperAccountIDPathParams struct {
	DeveloperAccountID string `pathParam:"style=simple,explode=false,name=developerAccountId"`
}

type DeleteDeveloperAccountsDeveloperAccountIDRequest struct {
	PathParams DeleteDeveloperAccountsDeveloperAccountIDPathParams
}

type DeleteDeveloperAccountsDeveloperAccountIDResponse struct {
	ContentType string
	StatusCode  int64
}
