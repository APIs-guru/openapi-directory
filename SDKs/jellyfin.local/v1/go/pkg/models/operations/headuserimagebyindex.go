package operations

import (
"openapi/pkg/models/shared")

type HeadUserImageByIndexPathParams struct {
    ImageIndex int32 `pathParam:"style=simple,explode=false,name=imageIndex"`
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type HeadUserImageByIndexQueryParams struct {
    AddPlayedIndicator *bool `queryParam:"style=form,explode=true,name=addPlayedIndicator"`
    BackgroundColor *string `queryParam:"style=form,explode=true,name=backgroundColor"`
    Blur *int32 `queryParam:"style=form,explode=true,name=blur"`
    CropWhitespace *bool `queryParam:"style=form,explode=true,name=cropWhitespace"`
    ForegroundLayer *string `queryParam:"style=form,explode=true,name=foregroundLayer"`
    Format *shared.ImageFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    MaxHeight *int32 `queryParam:"style=form,explode=true,name=maxHeight"`
    MaxWidth *int32 `queryParam:"style=form,explode=true,name=maxWidth"`
    PercentPlayed *float64 `queryParam:"style=form,explode=true,name=percentPlayed"`
    Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    UnplayedCount *int32 `queryParam:"style=form,explode=true,name=unplayedCount"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type HeadUserImageByIndexRequest struct {
    PathParams HeadUserImageByIndexPathParams 
    QueryParams HeadUserImageByIndexQueryParams 
    
}

type HeadUserImageByIndexResponse struct {
    ContentType string 
    HeadUserImageByIndex200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

