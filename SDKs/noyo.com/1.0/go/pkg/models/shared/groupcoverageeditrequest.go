package shared

import (
	"time"
)

type GroupCoverageEditRequest struct {
	ExistingCoverage       *bool      `json:"existing_coverage,omitempty"`
	Notes                  *string    `json:"notes,omitempty"`
	RequestedEffectiveDate *time.Time `json:"requested_effective_date,omitempty"`
}
