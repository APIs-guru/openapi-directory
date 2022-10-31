package shared

import (
"time")

type AssessmentPendingSubmission struct {
    Content *string `json:"content,omitempty"`
    Documents []Document `json:"documents,omitempty"`
    DueDate *time.Time `json:"dueDate,omitempty"`
    DurationMinutes *int32 `json:"durationMinutes,omitempty"`
    Filename *string `json:"filename,omitempty"`
    Hidden *bool `json:"hidden,omitempty"`
    ID *string `json:"id,omitempty"`
    MarkNumber *string `json:"markNumber,omitempty"`
    MarkType *string `json:"markType,omitempty"`
    MaxAttempts *int32 `json:"maxAttempts,omitempty"`
    OfferingID *string `json:"offeringId,omitempty"`
    OfferingName *string `json:"offeringName,omitempty"`
    OpenDate *time.Time `json:"openDate,omitempty"`
    Pid *string `json:"pid,omitempty"`
    Points *string `json:"points,omitempty"`
    Themes []ThemeResponse `json:"themes,omitempty"`
    Title *string `json:"title,omitempty"`
    TotalQuestions *int32 `json:"totalQuestions,omitempty"`
    TotalThemes *int32 `json:"totalThemes,omitempty"`
    Type *string `json:"type,omitempty"`
    Users []User `json:"users,omitempty"`
    
}

