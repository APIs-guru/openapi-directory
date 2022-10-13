package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubAccountPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type CreateSubAccountSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateSubAccountRequest struct {
	PathParams CreateSubAccountPathParams
	Request    shared.NewSubaccountRequest `request:"mediaType=application/json"`
	Security   CreateSubAccountSecurity
}

type CreateSubAccount401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type CreateSubAccount404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type CreateSubAccount422ApplicationJSONInvalidParameters struct {
	Name   *string `json:"name"`
	Reason *string `json:"reason"`
}

type CreateSubAccount422ApplicationJSON struct {
	Detail            string                                                `json:"detail"`
	Instance          string                                                `json:"instance"`
	InvalidParameters []CreateSubAccount422ApplicationJSONInvalidParameters `json:"invalid_parameters"`
	Title             string                                                `json:"title"`
	Type              string                                                `json:"type"`
}

type CreateSubAccountResponse struct {
	ContentType                              string
	StatusCode                               int64
	SubaccountCreateResponse                 *shared.SubaccountCreateResponse
	UnprovisionedErrorResponse               *shared.UnprovisionedErrorResponse
	CreateSubAccount401ApplicationJSONObject *CreateSubAccount401ApplicationJSON
	CreateSubAccount404ApplicationJSONObject *CreateSubAccount404ApplicationJSON
	CreateSubAccount422ApplicationJSONObject *CreateSubAccount422ApplicationJSON
}
