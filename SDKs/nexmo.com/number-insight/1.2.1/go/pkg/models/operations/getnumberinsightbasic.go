package operations

import (
	"openapi/pkg/models/shared"
)

type GetNumberInsightBasicPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetNumberInsightBasicQueryParams struct {
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Number  string  `queryParam:"style=form,explode=true,name=number"`
}

type GetNumberInsightBasicRequest struct {
	PathParams  GetNumberInsightBasicPathParams
	QueryParams GetNumberInsightBasicQueryParams
}

type GetNumberInsightBasicResponse struct {
	Body                []byte
	ContentType         string
	StatusCode          int64
	NiResponseJSONBasic *shared.NiResponseJSONBasic
}
