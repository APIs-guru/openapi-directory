package shared

import (
	"time"
)

type ImagePrediction struct {
	Created     *time.Time   `json:"created"`
	ID          *string      `json:"id"`
	Iteration   *string      `json:"iteration"`
	Predictions []Prediction `json:"predictions"`
	Project     *string      `json:"project"`
}
