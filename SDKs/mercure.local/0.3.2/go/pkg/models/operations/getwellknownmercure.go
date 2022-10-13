package operations

type GetWellKnownMercureQueryParams struct {
	LastEventID *string  `queryParam:"style=form,explode=true,name=Last-Event-ID"`
	Topic       []string `queryParam:"style=form,explode=true,name=topic"`
}

type GetWellKnownMercureHeaders struct {
	LastEventID *string `header:"name=Last-Event-ID"`
}

type GetWellKnownMercureRequest struct {
	QueryParams GetWellKnownMercureQueryParams
	Headers     GetWellKnownMercureHeaders
}

type GetWellKnownMercureResponse struct {
	ContentType string
	StatusCode  int64
}
