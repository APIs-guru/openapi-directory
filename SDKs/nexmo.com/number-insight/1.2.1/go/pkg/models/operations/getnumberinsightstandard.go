package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumberInsightStandardPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetNumberInsightStandardQueryParams struct {
	Cnam    *bool   `queryParam:"style=form,explode=true,name=cnam"`
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Number  string  `queryParam:"style=form,explode=true,name=number"`
}

type GetNumberInsightStandardRequest struct {
	PathParams  GetNumberInsightStandardPathParams
	QueryParams GetNumberInsightStandardQueryParams
}

type GetNumberInsightStandardResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	GetNumberInsightStandard200ApplicationJSONOneOf *interface{}
}
