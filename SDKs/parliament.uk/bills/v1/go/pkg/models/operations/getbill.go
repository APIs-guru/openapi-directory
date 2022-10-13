package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillPathParams struct {
	BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
}

type GetBillRequest struct {
	PathParams GetBillPathParams
}

type GetBillResponse struct {
	Bill           *shared.Bill
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
