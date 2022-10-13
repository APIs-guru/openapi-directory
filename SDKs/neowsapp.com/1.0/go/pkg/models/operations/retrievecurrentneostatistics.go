package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveCurrentNeoStatisticsResponse struct {
	ContentType string
	Statistics  *shared.Statistics
	StatusCode  int64
}
