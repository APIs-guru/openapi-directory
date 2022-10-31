package operations

type GetExportPdfBelegeBelegUUIDPathParams struct {
	BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
}

type GetExportPdfBelegeBelegUUIDRequest struct {
	PathParams GetExportPdfBelegeBelegUUIDPathParams
}

type GetExportPdfBelegeBelegUUIDResponse struct {
	ContentType string
	StatusCode  int64
}
