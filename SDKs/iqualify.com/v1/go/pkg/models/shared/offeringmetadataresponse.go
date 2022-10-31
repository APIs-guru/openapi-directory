package shared

import (
"time")

type OfferingMetadataResponse struct {
    ContentID *string `json:"contentId,omitempty"`
    CoverImageURL *string `json:"coverImageUrl,omitempty"`
    Currency *string `json:"currency,omitempty"`
    Description *string `json:"description,omitempty"`
    EarlyCloseOffDate *time.Time `json:"earlyCloseOffDate,omitempty"`
    End *time.Time `json:"end,omitempty"`
    EnrollmentLimit *float64 `json:"enrollmentLimit,omitempty"`
    HasEarlyCloseOff *bool `json:"hasEarlyCloseOff,omitempty"`
    ID *string `json:"id,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    IsReadonly *bool `json:"isReadonly,omitempty"`
    Metadata *OfferingMetadata `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Overview *string `json:"overview,omitempty"`
    Price *float64 `json:"price,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    TasksEnabled *bool `json:"tasksEnabled,omitempty"`
    TrailerVideoURL *string `json:"trailerVideoUrl,omitempty"`
    UseRelativeDates *bool `json:"useRelativeDates,omitempty"`
    
}

