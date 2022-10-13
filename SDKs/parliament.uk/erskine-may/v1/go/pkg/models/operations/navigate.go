package operations

import (
	"openapi/pkg/models/shared"
)

type NavigatePathParams struct {
	SectionID int32 `pathParam:"style=simple,explode=false,name=sectionId"`
	Step      int32 `pathParam:"style=simple,explode=false,name=step"`
}

type NavigateRequest struct {
	PathParams NavigatePathParams
}

type NavigateResponse struct {
	Body                      []byte
	ContentType               string
	ErskineMaySectionOverview *shared.ErskineMaySectionOverview
	StatusCode                int64
}
