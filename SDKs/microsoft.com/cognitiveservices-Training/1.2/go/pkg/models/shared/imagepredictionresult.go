package shared

import (
"time")

type ImagePredictionResult struct {
    Created *time.Time `json:"Created,omitempty"`
    ID *string `json:"Id,omitempty"`
    Iteration *string `json:"Iteration,omitempty"`
    Predictions []ImageTagPrediction `json:"Predictions,omitempty"`
    Project *string `json:"Project,omitempty"`
    
}

