package shared

import (
"time")

type ImagePrediction struct {
    Created *time.Time `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Iteration *string `json:"iteration,omitempty"`
    Predictions []Prediction `json:"predictions,omitempty"`
    Project *string `json:"project,omitempty"`
    
}

