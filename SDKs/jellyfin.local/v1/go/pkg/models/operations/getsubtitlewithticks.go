package operations



type GetSubtitleWithTicksPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    Index int32 `pathParam:"style=simple,explode=false,name=index"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    MediaSourceID string `pathParam:"style=simple,explode=false,name=mediaSourceId"`
    StartPositionTicks int64 `pathParam:"style=simple,explode=false,name=startPositionTicks"`
    
}

type GetSubtitleWithTicksQueryParams struct {
    AddVttTimeMap *bool `queryParam:"style=form,explode=true,name=addVttTimeMap"`
    CopyTimestamps *bool `queryParam:"style=form,explode=true,name=copyTimestamps"`
    EndPositionTicks *int64 `queryParam:"style=form,explode=true,name=endPositionTicks"`
    
}

type GetSubtitleWithTicksRequest struct {
    PathParams GetSubtitleWithTicksPathParams 
    QueryParams GetSubtitleWithTicksQueryParams 
    
}

type GetSubtitleWithTicksResponse struct {
    ContentType string 
    GetSubtitleWithTicks200TextWildcardBinaryString []byte 
    StatusCode int64 
    
}

