package operations

import (
"openapi/pkg/models/shared")

type GetImageRegionProposalsPathParams struct {
    ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type GetImageRegionProposalsHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type GetImageRegionProposalsRequest struct {
    PathParams GetImageRegionProposalsPathParams 
    Headers GetImageRegionProposalsHeaders 
    
}

type GetImageRegionProposalsResponse struct {
    ContentType string 
    ImageRegionProposal *shared.ImageRegionProposal 
    StatusCode int64 
    
}

