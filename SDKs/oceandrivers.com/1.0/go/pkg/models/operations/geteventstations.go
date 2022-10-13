package operations

type GetEventStationsPathParams struct {
	EventID string `pathParam:"style=simple,explode=false,name=eventId"`
}

type GetEventStationsRequest struct {
	PathParams GetEventStationsPathParams
}

type GetEventStationsResponse struct {
	ContentType string
	StatusCode  int64
}
