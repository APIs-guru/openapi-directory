package shared

import (
"time")

type PortfolioActivationsMetadata struct {
    RootContentID *string `json:"rootContentId,omitempty"`
    
}

type PortfolioActivations struct {
    ContentID *string `json:"contentId,omitempty"`
    End *time.Time `json:"end,omitempty"`
    ID *string `json:"id,omitempty"`
    Info *string `json:"info,omitempty"`
    LearnersCount *float64 `json:"learnersCount,omitempty"`
    Metadata *PortfolioActivationsMetadata `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    
}

