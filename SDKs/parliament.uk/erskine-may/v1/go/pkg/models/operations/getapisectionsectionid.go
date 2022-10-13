package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPISectionSectionIDPathParams struct {
	SectionID int32 `pathParam:"style=simple,explode=false,name=sectionId"`
}

type GetAPISectionSectionIDRequest struct {
	PathParams GetAPISectionSectionIDPathParams
}

type GetAPISectionSectionIDResponse struct {
	Body                    []byte
	ContentType             string
	ErskineMaySectionDetail *shared.ErskineMaySectionDetail
	StatusCode              int64
}
