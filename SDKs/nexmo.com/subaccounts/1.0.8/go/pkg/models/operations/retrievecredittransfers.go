package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveCreditTransfersPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type RetrieveCreditTransfersQueryParams struct {
	EndDate    *string `queryParam:"style=form,explode=true,name=end_date"`
	StartDate  string  `queryParam:"style=form,explode=true,name=start_date"`
	Subaccount *string `queryParam:"style=form,explode=true,name=subaccount"`
}

type RetrieveCreditTransfersSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type RetrieveCreditTransfers401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

// RetrieveCreditTransfers404ApplicationJSON
// Invalid API Key
type RetrieveCreditTransfers404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type RetrieveCreditTransfersRequest struct {
	PathParams  RetrieveCreditTransfersPathParams
	QueryParams RetrieveCreditTransfersQueryParams
	Security    RetrieveCreditTransfersSecurity
}

type RetrieveCreditTransfersResponse struct {
	ContentType                                     string
	ListCreditTransfersResponse                     *interface{}
	StatusCode                                      int64
	UnprovisionedErrorResponse                      *shared.UnprovisionedErrorResponse
	RetrieveCreditTransfers401ApplicationJSONObject *RetrieveCreditTransfers401ApplicationJSON
	RetrieveCreditTransfers404ApplicationJSONObject *RetrieveCreditTransfers404ApplicationJSON
}
