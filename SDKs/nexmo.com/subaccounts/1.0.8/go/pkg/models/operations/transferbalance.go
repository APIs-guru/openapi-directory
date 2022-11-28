package operations

import (
	"openapi/pkg/models/shared"
)

type TransferBalancePathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type TransferBalanceSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type TransferBalance401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

// TransferBalance404ApplicationJSON
// Invalid API Key
type TransferBalance404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type TransferBalance422ApplicationJSONInvalidParameters struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

type TransferBalance422ApplicationJSON struct {
	Detail            string                                               `json:"detail"`
	Instance          string                                               `json:"instance"`
	InvalidParameters []TransferBalance422ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Title             string                                               `json:"title"`
	Type              string                                               `json:"type"`
}

type TransferBalanceRequest struct {
	PathParams TransferBalancePathParams
	Request    shared.TransferBalanceOrCreditRequest `request:"mediaType=application/json"`
	Security   TransferBalanceSecurity
}

type TransferBalanceResponse struct {
	ContentType                             string
	StatusCode                              int64
	TransferBalanceResponse                 *interface{}
	UnprovisionedErrorResponse              *shared.UnprovisionedErrorResponse
	TransferBalance401ApplicationJSONObject *TransferBalance401ApplicationJSON
	TransferBalance404ApplicationJSONObject *TransferBalance404ApplicationJSON
	TransferBalance422ApplicationJSONObject *TransferBalance422ApplicationJSON
}
