package operations

type CreateAMapQueryParams struct {
	AppToken   *string `queryParam:"style=form,explode=true,name=app_token"`
	Constraint *string `queryParam:"style=form,explode=true,name=constraint"`
	EntityID   string  `queryParam:"style=form,explode=true,name=entity_id"`
	Variable   string  `queryParam:"style=form,explode=true,name=variable"`
}

type CreateAMapHeaders struct {
	XAppToken *string `header:"name=X-App-Token"`
}

type CreateAMapRequest struct {
	QueryParams CreateAMapQueryParams
	Headers     CreateAMapHeaders
}

type CreateAMapResponse struct {
	ContentType string
	StatusCode  int64
}
