package operations

type GetDatasetsQueryParams struct {
	AppToken  *string  `queryParam:"style=form,explode=true,name=app_token"`
	DatasetID *string  `queryParam:"style=form,explode=true,name=dataset_id"`
	EntityID  *string  `queryParam:"style=form,explode=true,name=entity_id"`
	Limit     *float64 `queryParam:"style=form,explode=true,name=limit"`
	Offset    *float64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetDatasetsHeaders struct {
	XAppToken *string `header:"name=X-App-Token"`
}

type GetDatasetsRequest struct {
	QueryParams GetDatasetsQueryParams
	Headers     GetDatasetsHeaders
}

type GetDatasetsResponse struct {
	ContentType string
	StatusCode  int64
}
