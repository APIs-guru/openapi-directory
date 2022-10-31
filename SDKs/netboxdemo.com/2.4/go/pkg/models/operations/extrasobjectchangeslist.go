package operations

import (
"openapi/pkg/models/shared")

type ExtrasObjectChangesListQueryParams struct {
    Action *string `queryParam:"style=form,explode=true,name=action"`
    ChangedObjectType *string `queryParam:"style=form,explode=true,name=changed_object_type"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    ObjectRepr *string `queryParam:"style=form,explode=true,name=object_repr"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    RequestID *string `queryParam:"style=form,explode=true,name=request_id"`
    Time *string `queryParam:"style=form,explode=true,name=time"`
    User *string `queryParam:"style=form,explode=true,name=user"`
    UserName *string `queryParam:"style=form,explode=true,name=user_name"`
    
}

type ExtrasObjectChangesListRequest struct {
    QueryParams ExtrasObjectChangesListQueryParams 
    
}

type ExtrasObjectChangesList200ApplicationJSON struct {
    Count int64 `json:"count"`
    Next *string `json:"next,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Results []shared.ObjectChange `json:"results"`
    
}

type ExtrasObjectChangesListResponse struct {
    ContentType string 
    StatusCode int64 
    ExtrasObjectChangesList200ApplicationJSONObject *ExtrasObjectChangesList200ApplicationJSON 
    
}

