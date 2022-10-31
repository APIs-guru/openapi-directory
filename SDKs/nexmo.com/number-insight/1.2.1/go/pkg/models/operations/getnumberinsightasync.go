package operations

import (
"openapi/pkg/models/shared")

type GetNumberInsightAsyncPathParams struct {
    Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetNumberInsightAsyncQueryParams struct {
    Callback string `queryParam:"style=form,explode=true,name=callback"`
    Cnam *bool `queryParam:"style=form,explode=true,name=cnam"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    IP *string `queryParam:"style=form,explode=true,name=ip"`
    Number string `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumberInsightAsyncRequest struct {
    PathParams GetNumberInsightAsyncPathParams 
    QueryParams GetNumberInsightAsyncQueryParams 
    
}

type GetNumberInsightAsyncResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    GetNumberInsightAsync200ApplicationJSONOneOf *interface{} 
    
}

