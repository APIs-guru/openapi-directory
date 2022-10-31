package shared

import (
"time")

type Image struct {
    Created *time.Time `json:"created,omitempty"`
    Height *int32 `json:"height,omitempty"`
    ID *string `json:"id,omitempty"`
    ImageURI *string `json:"imageUri,omitempty"`
    Regions []ImageRegion `json:"regions,omitempty"`
    Tags []ImageTag `json:"tags,omitempty"`
    ThumbnailURI *string `json:"thumbnailUri,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

