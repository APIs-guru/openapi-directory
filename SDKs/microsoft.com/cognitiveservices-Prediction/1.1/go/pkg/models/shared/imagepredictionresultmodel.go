package shared

import (
	"time"
)

type ImagePredictionResultModel struct {
	Created     *time.Time                `json:"Created"`
	ID          *string                   `json:"Id"`
	Iteration   *string                   `json:"Iteration"`
	Predictions []ImageTagPredictionModel `json:"Predictions"`
	Project     *string                   `json:"Project"`
}
