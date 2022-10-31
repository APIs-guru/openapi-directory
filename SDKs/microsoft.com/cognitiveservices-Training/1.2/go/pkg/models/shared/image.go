package shared

import (
"time")

type Image struct {
    Created *time.Time `json:"Created,omitempty"`
    Height *int32 `json:"Height,omitempty"`
    ID *string `json:"Id,omitempty"`
    ImageURI *string `json:"ImageUri,omitempty"`
    Predictions []PredictionTag `json:"Predictions,omitempty"`
    Tags []ImageTag `json:"Tags,omitempty"`
    ThumbnailURI *string `json:"ThumbnailUri,omitempty"`
    Width *int32 `json:"Width,omitempty"`
    
}

