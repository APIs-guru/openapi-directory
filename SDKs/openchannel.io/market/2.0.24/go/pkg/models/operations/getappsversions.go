package operations

type GetAppsVersionsQueryParams struct {
	DeveloperID *string `queryParam:"style=form,explode=true,name=developerId"`
	Limit       *int64  `queryParam:"style=form,explode=true,name=limit"`
	PageNumber  *int64  `queryParam:"style=form,explode=true,name=pageNumber"`
	Query       *string `queryParam:"style=form,explode=true,name=query"`
	Sort        *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetAppsVersionsRequest struct {
	QueryParams GetAppsVersionsQueryParams
}

type GetAppsVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
