package operations

type DcimRacksDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRacksDeleteRequest struct {
	PathParams DcimRacksDeletePathParams
}

type DcimRacksDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
