package shared

import (
"time")

type ImagePredictionResultModel struct {
    Created *time.Time `json:"Created,omitempty"`
    ID *string `json:"Id,omitempty"`
    Iteration *string `json:"Iteration,omitempty"`
    Predictions []ImageTagPredictionModel `json:"Predictions,omitempty"`
    Project *string `json:"Project,omitempty"`
    
}

