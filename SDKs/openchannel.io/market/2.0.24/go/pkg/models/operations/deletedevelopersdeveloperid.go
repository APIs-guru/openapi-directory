package operations

type DeleteDevelopersDeveloperIDPathParams struct {
	DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
}

type DeleteDevelopersDeveloperIDRequest struct {
	PathParams DeleteDevelopersDeveloperIDPathParams
}

type DeleteDevelopersDeveloperIDResponse struct {
	ContentType string
	StatusCode  int64
}
