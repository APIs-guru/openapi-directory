package operations

type GetExportQrBelegeBelegUUIDPathParams struct {
	BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
}

type GetExportQrBelegeBelegUUIDRequest struct {
	PathParams GetExportQrBelegeBelegUUIDPathParams
}

type GetExportQrBelegeBelegUUIDResponse struct {
	ContentType string
	StatusCode  int64
}
