package operations

import (
	"openapi/pkg/models/shared"
)

type TransferCreditPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type TransferCreditSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type TransferCreditRequest struct {
	PathParams TransferCreditPathParams
	Request    shared.TransferBalanceOrCreditRequest `request:"mediaType=application/json"`
	Security   TransferCreditSecurity
}

type TransferCredit401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type TransferCredit404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type TransferCredit422ApplicationJSONInvalidParameters struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

type TransferCredit422ApplicationJSON struct {
	Detail            string                                              `json:"detail"`
	Instance          string                                              `json:"instance"`
	InvalidParameters []TransferCredit422ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Title             string                                              `json:"title"`
	Type              string                                              `json:"type"`
}

type TransferCreditResponse struct {
	ContentType                            string
	StatusCode                             int64
	TransferCreditResponse                 *interface{}
	UnprovisionedErrorResponse             *shared.UnprovisionedErrorResponse
	TransferCredit401ApplicationJSONObject *TransferCredit401ApplicationJSON
	TransferCredit404ApplicationJSONObject *TransferCredit404ApplicationJSON
	TransferCredit422ApplicationJSONObject *TransferCredit422ApplicationJSON
}
