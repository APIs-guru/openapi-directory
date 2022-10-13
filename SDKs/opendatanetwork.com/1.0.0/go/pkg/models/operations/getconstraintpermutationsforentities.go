package operations

type GetConstraintPermutationsForEntitiesPathParams struct {
	Variable string `pathParam:"style=simple,explode=false,name=variable"`
}

type GetConstraintPermutationsForEntitiesQueryParams struct {
	AppToken   *string `queryParam:"style=form,explode=true,name=app_token"`
	Constraint string  `queryParam:"style=form,explode=true,name=constraint"`
	EntityID   string  `queryParam:"style=form,explode=true,name=entity_id"`
}

type GetConstraintPermutationsForEntitiesHeaders struct {
	XAppToken *string `header:"name=X-App-Token"`
}

type GetConstraintPermutationsForEntitiesRequest struct {
	PathParams  GetConstraintPermutationsForEntitiesPathParams
	QueryParams GetConstraintPermutationsForEntitiesQueryParams
	Headers     GetConstraintPermutationsForEntitiesHeaders
}

type GetConstraintPermutationsForEntitiesResponse struct {
	ContentType string
	StatusCode  int64
}
