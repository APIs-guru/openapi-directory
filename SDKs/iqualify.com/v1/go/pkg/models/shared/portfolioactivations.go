package shared

import (
	"time"
)

type PortfolioActivationsMetadata struct {
	RootContentID *string `json:"rootContentId"`
}

type PortfolioActivations struct {
	ContentID     *string                       `json:"contentId"`
	End           *time.Time                    `json:"end"`
	ID            *string                       `json:"id"`
	Info          *string                       `json:"info"`
	LearnersCount *float64                      `json:"learnersCount"`
	Metadata      *PortfolioActivationsMetadata `json:"metadata"`
	Name          *string                       `json:"name"`
	Start         *time.Time                    `json:"start"`
}
