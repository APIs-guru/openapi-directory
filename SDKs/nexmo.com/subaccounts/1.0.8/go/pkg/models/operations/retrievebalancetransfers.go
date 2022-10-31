package operations

import (
"openapi/pkg/models/shared")

type RetrieveBalanceTransfersPathParams struct {
    APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
    
}

type RetrieveBalanceTransfersQueryParams struct {
    EndDate *string `queryParam:"style=form,explode=true,name=end_date"`
    StartDate string `queryParam:"style=form,explode=true,name=start_date"`
    Subaccount *string `queryParam:"style=form,explode=true,name=subaccount"`
    
}

type RetrieveBalanceTransfersSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type RetrieveBalanceTransfersRequest struct {
    PathParams RetrieveBalanceTransfersPathParams 
    QueryParams RetrieveBalanceTransfersQueryParams 
    Security RetrieveBalanceTransfersSecurity 
    
}

type RetrieveBalanceTransfers401ApplicationJSON struct {
    Detail string `json:"detail"`
    Instance string `json:"instance"`
    Title string `json:"title"`
    Type string `json:"type"`
    
}

type RetrieveBalanceTransfers404ApplicationJSON struct {
    Detail string `json:"detail"`
    Instance string `json:"instance"`
    Title string `json:"title"`
    Type string `json:"type"`
    
}

type RetrieveBalanceTransfersResponse struct {
    ContentType string 
    ListBalanceTransfersResponse *interface{} 
    StatusCode int64 
    UnprovisionedErrorResponse *shared.UnprovisionedErrorResponse 
    RetrieveBalanceTransfers401ApplicationJSONObject *RetrieveBalanceTransfers401ApplicationJSON 
    RetrieveBalanceTransfers404ApplicationJSONObject *RetrieveBalanceTransfers404ApplicationJSON 
    
}

