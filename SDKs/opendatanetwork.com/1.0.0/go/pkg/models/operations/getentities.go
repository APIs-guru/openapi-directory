package operations

type GetEntitiesQueryParams struct {
	AppToken   *string `queryParam:"style=form,explode=true,name=app_token"`
	EntityID   *string `queryParam:"style=form,explode=true,name=entity_id"`
	EntityName *string `queryParam:"style=form,explode=true,name=entity_name"`
	EntityType *string `queryParam:"style=form,explode=true,name=entity_type"`
}

type GetEntitiesHeaders struct {
	XAppToken *string `header:"name=X-App-Token"`
}

type GetEntitiesRequest struct {
	QueryParams GetEntitiesQueryParams
	Headers     GetEntitiesHeaders
}

type GetEntitiesResponse struct {
	ContentType string
	StatusCode  int64
}
