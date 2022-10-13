package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveSubaccountsListPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
}

type RetrieveSubaccountsListSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type RetrieveSubaccountsListRequest struct {
	PathParams RetrieveSubaccountsListPathParams
	Security   RetrieveSubaccountsListSecurity
}

type RetrieveSubaccountsList401ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type RetrieveSubaccountsList404ApplicationJSON struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}

type RetrieveSubaccountsListResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	SubaccountsAllResponse                          *interface{}
	UnprovisionedErrorResponse                      *shared.UnprovisionedErrorResponse
	RetrieveSubaccountsList401ApplicationJSONObject *RetrieveSubaccountsList401ApplicationJSON
	RetrieveSubaccountsList404ApplicationJSONObject *RetrieveSubaccountsList404ApplicationJSON
}
