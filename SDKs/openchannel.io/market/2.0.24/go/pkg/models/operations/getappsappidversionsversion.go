package operations

type GetAppsAppIDVersionsVersionPathParams struct {
	AppID   string `pathParam:"style=simple,explode=false,name=appId"`
	Version int64  `pathParam:"style=simple,explode=false,name=version"`
}

type GetAppsAppIDVersionsVersionQueryParams struct {
	DeveloperID *string `queryParam:"style=form,explode=true,name=developerId"`
}

type GetAppsAppIDVersionsVersionRequest struct {
	PathParams  GetAppsAppIDVersionsVersionPathParams
	QueryParams GetAppsAppIDVersionsVersionQueryParams
}

type GetAppsAppIDVersionsVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
