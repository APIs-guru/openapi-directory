package operations

import (
"openapi/pkg/models/shared")

type GetAmendmentPathParams struct {
    AmendmentID int32 `pathParam:"style=simple,explode=false,name=amendmentId"`
    BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
    BillStageID int32 `pathParam:"style=simple,explode=false,name=billStageId"`
    
}

type GetAmendmentRequest struct {
    PathParams GetAmendmentPathParams 
    
}

type GetAmendmentResponse struct {
    AmendmentDetail *shared.AmendmentDetail 
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

