package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1ServicesCalendarIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1ServicesCalendarIDRequest struct {
	PathParams DeleteSetupV1ServicesCalendarIDPathParams
}

type DeleteSetupV1ServicesCalendarIDResponse struct {
	ContentType              string
	ServiceCalendarViewModel *shared.ServiceCalendarViewModel
	StatusCode               int64
}
