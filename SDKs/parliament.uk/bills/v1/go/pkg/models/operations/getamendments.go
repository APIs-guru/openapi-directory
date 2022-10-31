package operations

import (
"openapi/pkg/models/shared")

type GetAmendmentsPathParams struct {
    BillID int32 `pathParam:"style=simple,explode=false,name=billId"`
    BillStageID int32 `pathParam:"style=simple,explode=false,name=billStageId"`
    
}

type GetAmendmentsQueryParams struct {
    Decision *shared.DecisionEnum `queryParam:"style=form,explode=true,name=Decision"`
    MemberID *int32 `queryParam:"style=form,explode=true,name=MemberId"`
    SearchTerm *string `queryParam:"style=form,explode=true,name=SearchTerm"`
    Skip *int32 `queryParam:"style=form,explode=true,name=Skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=Take"`
    
}

type GetAmendmentsRequest struct {
    PathParams GetAmendmentsPathParams 
    QueryParams GetAmendmentsQueryParams 
    
}

type GetAmendmentsResponse struct {
    AmendmentSearchItemSearchResult *shared.AmendmentSearchItemSearchResult 
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

