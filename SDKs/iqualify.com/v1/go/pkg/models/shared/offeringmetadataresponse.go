package shared

import (
	"time"
)

type OfferingMetadataResponse struct {
	ContentID         *string           `json:"contentId"`
	CoverImageURL     *string           `json:"coverImageUrl"`
	Currency          *string           `json:"currency"`
	Description       *string           `json:"description"`
	EarlyCloseOffDate *time.Time        `json:"earlyCloseOffDate"`
	End               *time.Time        `json:"end"`
	EnrollmentLimit   *float64          `json:"enrollmentLimit"`
	HasEarlyCloseOff  *bool             `json:"hasEarlyCloseOff"`
	ID                *string           `json:"id"`
	Identifier        *string           `json:"identifier"`
	IsReadonly        *bool             `json:"isReadonly"`
	Metadata          *OfferingMetadata `json:"metadata"`
	Name              *string           `json:"name"`
	Overview          *string           `json:"overview"`
	Price             *float64          `json:"price"`
	Start             *time.Time        `json:"start"`
	TasksEnabled      *bool             `json:"tasksEnabled"`
	TrailerVideoURL   *string           `json:"trailerVideoUrl"`
	UseRelativeDates  *bool             `json:"useRelativeDates"`
}
