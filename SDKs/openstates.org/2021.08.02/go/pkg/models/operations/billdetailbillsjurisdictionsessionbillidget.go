package operations

import (
	"openapi/pkg/models/shared"
)

type BillDetailBillsJurisdictionSessionBillIDGetPathParams struct {
	BillID       string `pathParam:"style=simple,explode=false,name=bill_id"`
	Jurisdiction string `pathParam:"style=simple,explode=false,name=jurisdiction"`
	Session      string `pathParam:"style=simple,explode=false,name=session"`
}

type BillDetailBillsJurisdictionSessionBillIDGetQueryParams struct {
	Apikey  *string                  `queryParam:"style=form,explode=true,name=apikey"`
	Include []shared.BillIncludeEnum `queryParam:"style=form,explode=true,name=include"`
}

type BillDetailBillsJurisdictionSessionBillIDGetHeaders struct {
	XAPIKey *string `header:"name=x-api-key"`
}

type BillDetailBillsJurisdictionSessionBillIDGetRequest struct {
	PathParams  BillDetailBillsJurisdictionSessionBillIDGetPathParams
	QueryParams BillDetailBillsJurisdictionSessionBillIDGetQueryParams
	Headers     BillDetailBillsJurisdictionSessionBillIDGetHeaders
}

type BillDetailBillsJurisdictionSessionBillIDGetResponse struct {
	Bill                *shared.Bill
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
