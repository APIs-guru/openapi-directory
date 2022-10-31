package operations

import (
"openapi/pkg/models/shared")

type GetBillStageDetailsPathParams struct {
    BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
    BillStageID int32 `pathParam:"style=simple,explode=false,name=billStageId"`
    
}

type GetBillStageDetailsRequest struct {
    PathParams GetBillStageDetailsPathParams 
    
}

type GetBillStageDetailsResponse struct {
    BillStageDetails *shared.BillStageDetails 
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

