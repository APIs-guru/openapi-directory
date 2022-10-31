package operations

import (
"openapi/pkg/models/shared")

type GetBillPublicationPathParams struct {
    BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
    
}

type GetBillPublicationRequest struct {
    PathParams GetBillPublicationPathParams 
    
}

type GetBillPublicationResponse struct {
    BillPublicationList *shared.BillPublicationList 
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

