package operations

type GetHackathonsIDFormatPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetHackathonsIDFormatRequest struct {
	PathParams GetHackathonsIDFormatPathParams
}

type GetHackathonsIDFormatResponse struct {
	ContentType string
	StatusCode  int64
}
