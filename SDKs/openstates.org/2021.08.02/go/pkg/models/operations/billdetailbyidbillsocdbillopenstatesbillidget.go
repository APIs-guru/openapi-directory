package operations

import (
	"openapi/pkg/models/shared"
)

type BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams struct {
	OpenstatesBillID string `pathParam:"style=simple,explode=false,name=openstates_bill_id"`
}

type BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams struct {
	Apikey  *string                  `queryParam:"style=form,explode=true,name=apikey"`
	Include []shared.BillIncludeEnum `queryParam:"style=form,explode=true,name=include"`
}

type BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders struct {
	XAPIKey *string `header:"name=x-api-key"`
}

type BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest struct {
	PathParams  BillDetailByIDBillsOcdBillOpenstatesBillIDGetPathParams
	QueryParams BillDetailByIDBillsOcdBillOpenstatesBillIDGetQueryParams
	Headers     BillDetailByIDBillsOcdBillOpenstatesBillIDGetHeaders
}

type BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse struct {
	Bill                *shared.Bill
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
