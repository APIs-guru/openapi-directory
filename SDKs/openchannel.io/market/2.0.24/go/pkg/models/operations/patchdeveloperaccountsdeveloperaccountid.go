package operations

type PatchDeveloperAccountsDeveloperAccountIDPathParams struct {
	DeveloperAccountID string `pathParam:"style=simple,explode=false,name=developerAccountId"`
}

type PatchDeveloperAccountsDeveloperAccountIDQueryParams struct {
	CustomData  *string `queryParam:"style=form,explode=true,name=customData"`
	DeveloperID string  `queryParam:"style=form,explode=true,name=developerId"`
	Email       *string `queryParam:"style=form,explode=true,name=email"`
	Name        *string `queryParam:"style=form,explode=true,name=name"`
}

type PatchDeveloperAccountsDeveloperAccountIDRequest struct {
	PathParams  PatchDeveloperAccountsDeveloperAccountIDPathParams
	QueryParams PatchDeveloperAccountsDeveloperAccountIDQueryParams
}

type PatchDeveloperAccountsDeveloperAccountIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
