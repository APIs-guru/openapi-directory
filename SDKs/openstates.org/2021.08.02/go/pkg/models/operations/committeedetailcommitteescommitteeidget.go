package operations

import (
"openapi/pkg/models/shared")

type CommitteeDetailCommitteesCommitteeIDGetPathParams struct {
    CommitteeID string `pathParam:"style=simple,explode=false,name=committee_id"`
    
}

type CommitteeDetailCommitteesCommitteeIDGetQueryParams struct {
    Apikey *string `queryParam:"style=form,explode=true,name=apikey"`
    Include []shared.CommitteeIncludeEnum `queryParam:"style=form,explode=true,name=include"`
    
}

type CommitteeDetailCommitteesCommitteeIDGetHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=x-api-key"`
    
}

type CommitteeDetailCommitteesCommitteeIDGetRequest struct {
    PathParams CommitteeDetailCommitteesCommitteeIDGetPathParams 
    QueryParams CommitteeDetailCommitteesCommitteeIDGetQueryParams 
    Headers CommitteeDetailCommitteesCommitteeIDGetHeaders 
    
}

type CommitteeDetailCommitteesCommitteeIDGetResponse struct {
    Committee *shared.Committee 
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

