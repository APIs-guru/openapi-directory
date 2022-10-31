package operations

import (
	"openapi/pkg/models/shared"
)

type GetParagraphSectionIDPathParams struct {
	Reference string `pathParam:"style=simple,explode=false,name=reference"`
}

type GetParagraphSectionIDRequest struct {
	PathParams GetParagraphSectionIDPathParams
}

type GetParagraphSectionIDResponse struct {
	Body                      []byte
	ContentType               string
	ErskineMaySectionOverview *shared.ErskineMaySectionOverview
	StatusCode                int64
}
