package operations

type DcimRackReservationsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackReservationsDeleteRequest struct {
	PathParams DcimRackReservationsDeletePathParams
}

type DcimRackReservationsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
