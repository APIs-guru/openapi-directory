package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveSubaccountPathParams struct {
	APIKey        string `pathParam:"style=simple,explode=false,name=api_key"`
	SubaccountKey string `pathParam:"style=simple,explode=false,name=subaccount_key"`
}

type RetrieveSubaccountSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type RetrieveSubaccountRequest struct {
	PathParams RetrieveSubaccountPathParams
	Security   RetrieveSubaccountSecurity
}

type RetrieveSubaccount401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type RetrieveSubaccount404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type RetrieveSubaccountResponse struct {
	ContentType                                string
	StatusCode                                 int64
	SubaccountResponse                         *interface{}
	UnprovisionedErrorResponse                 *shared.UnprovisionedErrorResponse
	RetrieveSubaccount401ApplicationJSONObject *RetrieveSubaccount401ApplicationJSON
	RetrieveSubaccount404ApplicationJSONObject *RetrieveSubaccount404ApplicationJSON
}
