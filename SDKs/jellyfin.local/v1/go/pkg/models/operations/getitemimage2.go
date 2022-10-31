package operations

import (
"openapi/pkg/models/shared")

type GetItemImage2PathParams struct {
    Format shared.ImageFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    ImageIndex int32 `pathParam:"style=simple,explode=false,name=imageIndex"`
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    MaxHeight int32 `pathParam:"style=simple,explode=false,name=maxHeight"`
    MaxWidth int32 `pathParam:"style=simple,explode=false,name=maxWidth"`
    PercentPlayed float64 `pathParam:"style=simple,explode=false,name=percentPlayed"`
    Tag string `pathParam:"style=simple,explode=false,name=tag"`
    UnplayedCount int32 `pathParam:"style=simple,explode=false,name=unplayedCount"`
    
}

type GetItemImage2QueryParams struct {
    AddPlayedIndicator *bool `queryParam:"style=form,explode=true,name=addPlayedIndicator"`
    BackgroundColor *string `queryParam:"style=form,explode=true,name=backgroundColor"`
    Blur *int32 `queryParam:"style=form,explode=true,name=blur"`
    CropWhitespace *bool `queryParam:"style=form,explode=true,name=cropWhitespace"`
    ForegroundLayer *string `queryParam:"style=form,explode=true,name=foregroundLayer"`
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type GetItemImage2Request struct {
    PathParams GetItemImage2PathParams 
    QueryParams GetItemImage2QueryParams 
    
}

type GetItemImage2Response struct {
    ContentType string 
    GetItemImage2200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

