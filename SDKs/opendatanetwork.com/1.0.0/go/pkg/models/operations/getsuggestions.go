package operations

type GetSuggestionsTypeEnum string

const (
	GetSuggestionsTypeEnumEntity    GetSuggestionsTypeEnum = "entity"
	GetSuggestionsTypeEnumCategory  GetSuggestionsTypeEnum = "category"
	GetSuggestionsTypeEnumPublisher GetSuggestionsTypeEnum = "publisher"
	GetSuggestionsTypeEnumDataset   GetSuggestionsTypeEnum = "dataset"
	GetSuggestionsTypeEnumQuestion  GetSuggestionsTypeEnum = "question"
)

type GetSuggestionsPathParams struct {
	Type GetSuggestionsTypeEnum `pathParam:"style=simple,explode=false,name=type"`
}

type GetSuggestionsQueryParams struct {
	AppToken   *string  `queryParam:"style=form,explode=true,name=app_token"`
	Limit      *float64 `queryParam:"style=form,explode=true,name=limit"`
	Query      string   `queryParam:"style=form,explode=true,name=query"`
	VariableID *string  `queryParam:"style=form,explode=true,name=variable_id"`
}

type GetSuggestionsHeaders struct {
	XAppToken *string `header:"name=X-App-Token"`
}

type GetSuggestionsRequest struct {
	PathParams  GetSuggestionsPathParams
	QueryParams GetSuggestionsQueryParams
	Headers     GetSuggestionsHeaders
}

type GetSuggestionsResponse struct {
	ContentType string
	StatusCode  int64
}
