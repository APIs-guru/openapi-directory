package operations

import (
	"openapi/pkg/models/shared"
)

type HeadUserImagePathParams struct {
	ImageType shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	UserID    string               `pathParam:"style=simple,explode=false,name=userId"`
}

type HeadUserImageQueryParams struct {
	AddPlayedIndicator *bool                   `queryParam:"style=form,explode=true,name=addPlayedIndicator"`
	BackgroundColor    *string                 `queryParam:"style=form,explode=true,name=backgroundColor"`
	Blur               *int32                  `queryParam:"style=form,explode=true,name=blur"`
	CropWhitespace     *bool                   `queryParam:"style=form,explode=true,name=cropWhitespace"`
	ForegroundLayer    *string                 `queryParam:"style=form,explode=true,name=foregroundLayer"`
	Format             *shared.ImageFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Height             *int32                  `queryParam:"style=form,explode=true,name=height"`
	ImageIndex         *int32                  `queryParam:"style=form,explode=true,name=imageIndex"`
	MaxHeight          *int32                  `queryParam:"style=form,explode=true,name=maxHeight"`
	MaxWidth           *int32                  `queryParam:"style=form,explode=true,name=maxWidth"`
	PercentPlayed      *float64                `queryParam:"style=form,explode=true,name=percentPlayed"`
	Quality            *int32                  `queryParam:"style=form,explode=true,name=quality"`
	Tag                *string                 `queryParam:"style=form,explode=true,name=tag"`
	UnplayedCount      *int32                  `queryParam:"style=form,explode=true,name=unplayedCount"`
	Width              *int32                  `queryParam:"style=form,explode=true,name=width"`
}

type HeadUserImageRequest struct {
	PathParams  HeadUserImagePathParams
	QueryParams HeadUserImageQueryParams
}

type HeadUserImageResponse struct {
	ContentType                               string
	HeadUserImage200ImageWildcardBinaryString []byte
	ProblemDetails                            map[string]interface{}
	StatusCode                                int64
}
