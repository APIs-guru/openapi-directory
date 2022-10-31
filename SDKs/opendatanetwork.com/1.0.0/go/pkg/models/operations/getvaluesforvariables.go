package operations

type GetValuesForVariablesFormatEnum string

const (
	GetValuesForVariablesFormatEnumGoogle GetValuesForVariablesFormatEnum = "google"
)

type GetValuesForVariablesQueryParams struct {
	AppToken *string                          `queryParam:"style=form,explode=true,name=app_token"`
	Describe *bool                            `queryParam:"style=form,explode=true,name=describe"`
	EntityID *string                          `queryParam:"style=form,explode=true,name=entity_id"`
	Forecast *float64                         `queryParam:"style=form,explode=true,name=forecast"`
	Format   *GetValuesForVariablesFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Variable string                           `queryParam:"style=form,explode=true,name=variable"`
}

type GetValuesForVariablesHeaders struct {
	XAppToken *string `header:"style=simple,explode=false,name=X-App-Token"`
}

type GetValuesForVariablesRequest struct {
	QueryParams GetValuesForVariablesQueryParams
	Headers     GetValuesForVariablesHeaders
}

type GetValuesForVariablesResponse struct {
	ContentType string
	StatusCode  int64
}
