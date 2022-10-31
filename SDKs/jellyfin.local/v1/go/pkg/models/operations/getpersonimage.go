package operations

import (
"openapi/pkg/models/shared")

type GetPersonImagePathParams struct {
    ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetPersonImageQueryParams struct {
    AddPlayedIndicator *bool `queryParam:"style=form,explode=true,name=addPlayedIndicator"`
    BackgroundColor *string `queryParam:"style=form,explode=true,name=backgroundColor"`
    Blur *int32 `queryParam:"style=form,explode=true,name=blur"`
    CropWhitespace *bool `queryParam:"style=form,explode=true,name=cropWhitespace"`
    ForegroundLayer *string `queryParam:"style=form,explode=true,name=foregroundLayer"`
    Format *shared.ImageFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    ImageIndex *int32 `queryParam:"style=form,explode=true,name=imageIndex"`
    MaxHeight *int32 `queryParam:"style=form,explode=true,name=maxHeight"`
    MaxWidth *int32 `queryParam:"style=form,explode=true,name=maxWidth"`
    PercentPlayed *float64 `queryParam:"style=form,explode=true,name=percentPlayed"`
    Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    UnplayedCount *int32 `queryParam:"style=form,explode=true,name=unplayedCount"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type GetPersonImageRequest struct {
    PathParams GetPersonImagePathParams 
    QueryParams GetPersonImageQueryParams 
    
}

type GetPersonImageResponse struct {
    ContentType string 
    GetPersonImage200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

