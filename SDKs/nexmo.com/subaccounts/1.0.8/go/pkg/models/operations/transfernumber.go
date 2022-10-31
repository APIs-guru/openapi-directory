package operations

import (
	"openapi/pkg/models/shared"
)

type TransferNumberPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type TransferNumberSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type TransferNumberRequest struct {
	PathParams TransferNumberPathParams
	Request    shared.TransferNumberRequest `request:"mediaType=application/json"`
	Security   TransferNumberSecurity
}

type TransferNumber401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type TransferNumber409ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type TransferNumber422ApplicationJSONInvalidParameters struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

type TransferNumber422ApplicationJSON struct {
	Detail            string                                              `json:"detail"`
	Instance          string                                              `json:"instance"`
	InvalidParameters []TransferNumber422ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Title             string                                              `json:"title"`
	Type              string                                              `json:"type"`
}

type TransferNumberResponse struct {
	ContentType                            string
	StatusCode                             int64
	TransferNumberResponse                 *interface{}
	TransferNumber401ApplicationJSONObject *TransferNumber401ApplicationJSON
	TransferNumber403ApplicationJSONOneOf  *interface{}
	TransferNumber404ApplicationJSONOneOf  *interface{}
	TransferNumber409ApplicationJSONObject *TransferNumber409ApplicationJSON
	TransferNumber422ApplicationJSONObject *TransferNumber422ApplicationJSON
}
