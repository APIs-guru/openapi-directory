package shared

import (
	"time"
)

type ImagePredictionResult struct {
	Created     *time.Time           `json:"Created"`
	ID          *string              `json:"Id"`
	Iteration   *string              `json:"Iteration"`
	Predictions []ImageTagPrediction `json:"Predictions"`
	Project     *string              `json:"Project"`
}
