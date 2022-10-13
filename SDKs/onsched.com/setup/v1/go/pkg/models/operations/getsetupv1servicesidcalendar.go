package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesIDCalendarPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesIDCalendarQueryParams struct {
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
}

type GetSetupV1ServicesIDCalendarRequest struct {
	PathParams  GetSetupV1ServicesIDCalendarPathParams
	QueryParams GetSetupV1ServicesIDCalendarQueryParams
}

type GetSetupV1ServicesIDCalendarResponse struct {
	ContentType              string
	ServiceCalendarViewModel *shared.ServiceCalendarViewModel
	StatusCode               int64
}
