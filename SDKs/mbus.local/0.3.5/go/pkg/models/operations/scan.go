package operations

type ScanPathParams struct {
	Baudrate int32  `pathParam:"style=simple,explode=false,name=baudrate"`
	Device   string `pathParam:"style=simple,explode=false,name=device"`
}

type ScanRequest struct {
	PathParams ScanPathParams
}

type ScanResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
