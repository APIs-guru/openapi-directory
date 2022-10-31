package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupingOptionsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetGroupingOptionsRequest struct {
	PathParams GetGroupingOptionsPathParams
}

type GetGroupingOptionsResponse struct {
	ContentType           string
	ProblemDetails        map[string]interface{}
	SpecialViewOptionDtos []shared.SpecialViewOptionDto
	StatusCode            int64
}
