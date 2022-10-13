package shared

import (
	"time"
)

type OfferingRequiredBadge struct {
	BadgeExpiry      *BadgeExpiry `json:"badgeExpiry"`
	Description      *string      `json:"description"`
	RequiresApproval *bool        `json:"requiresApproval"`
	Title            *string      `json:"title"`
}

type OfferingRequiredMetadata struct {
	Category *string  `json:"category"`
	Level    *string  `json:"level"`
	Tags     []string `json:"tags"`
	Topic    *string  `json:"topic"`
}

type OfferingRequired struct {
	Badge                 *OfferingRequiredBadge    `json:"badge"`
	ContentID             *string                   `json:"contentId"`
	CreateDefaultChannels *bool                     `json:"createDefaultChannels"`
	Description           *string                   `json:"description"`
	EarlyCloseOffDate     *time.Time                `json:"earlyCloseOffDate"`
	End                   *time.Time                `json:"end"`
	HasEarlyCloseOff      *bool                     `json:"hasEarlyCloseOff"`
	Identifier            *string                   `json:"identifier"`
	IsReadonly            *bool                     `json:"isReadonly"`
	Metadata              *OfferingRequiredMetadata `json:"metadata"`
	Name                  *string                   `json:"name"`
	RootContentID         *string                   `json:"rootContentId"`
	Start                 time.Time                 `json:"start"`
	TrailerVideoURL       *string                   `json:"trailerVideoUrl"`
	UseRelativeDates      *bool                     `json:"useRelativeDates"`
}
