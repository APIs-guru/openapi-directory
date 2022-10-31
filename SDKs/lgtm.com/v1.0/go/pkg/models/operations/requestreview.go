package operations

import (
"openapi/pkg/models/shared")

type RequestReviewPathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type RequestReviewQueryParams struct {
    Base string `queryParam:"style=form,explode=true,name=base"`
    CallbackSecret *string `queryParam:"style=form,explode=true,name=callback-secret"`
    CallbackURL *string `queryParam:"style=form,explode=true,name=callback-url"`
    ExternalID int32 `queryParam:"style=form,explode=true,name=external-id"`
    ReviewURL *string `queryParam:"style=form,explode=true,name=review-url"`
    
}

type RequestReviewSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type RequestReviewRequest struct {
    PathParams RequestReviewPathParams 
    QueryParams RequestReviewQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security RequestReviewSecurity 
    
}

type RequestReviewResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

