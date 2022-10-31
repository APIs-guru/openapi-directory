package operations

import (
"openapi/pkg/models/shared")

type GetTransactionInfoPathParams struct {
    Txid string `pathParam:"style=simple,explode=false,name=txid"`
    
}

type GetTransactionInfoRequest struct {
    PathParams GetTransactionInfoPathParams 
    
}

type GetTransactionInfoResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    GetTransactionInfoResponse *shared.GetTransactionInfoResponse 
    
}

