package operations

type GetSetupV1CalendarsIDBlocksPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1CalendarsIDBlocksQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1CalendarsIDBlocksRequest struct {
	PathParams  GetSetupV1CalendarsIDBlocksPathParams
	QueryParams GetSetupV1CalendarsIDBlocksQueryParams
}

type GetSetupV1CalendarsIDBlocksResponse struct {
	CalendarBlockListViewModel map[string]interface{}
	ContentType                string
	StatusCode                 int64
}
