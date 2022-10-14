package shared

import (
	"time"
)

type OfferingRequiredBadge struct {
	BadgeExpiry      *BadgeExpiry `json:"badgeExpiry,omitempty"`
	Description      *string      `json:"description,omitempty"`
	RequiresApproval *bool        `json:"requiresApproval,omitempty"`
	Title            *string      `json:"title,omitempty"`
}

type OfferingRequiredMetadata struct {
	Category *string  `json:"category,omitempty"`
	Level    *string  `json:"level,omitempty"`
	Tags     []string `json:"tags,omitempty"`
	Topic    *string  `json:"topic,omitempty"`
}

type OfferingRequired struct {
	Badge                 *OfferingRequiredBadge    `json:"badge,omitempty"`
	ContentID             *string                   `json:"contentId,omitempty"`
	CreateDefaultChannels *bool                     `json:"createDefaultChannels,omitempty"`
	Description           *string                   `json:"description,omitempty"`
	EarlyCloseOffDate     *time.Time                `json:"earlyCloseOffDate,omitempty"`
	End                   *time.Time                `json:"end,omitempty"`
	HasEarlyCloseOff      *bool                     `json:"hasEarlyCloseOff,omitempty"`
	Identifier            *string                   `json:"identifier,omitempty"`
	IsReadonly            *bool                     `json:"isReadonly,omitempty"`
	Metadata              *OfferingRequiredMetadata `json:"metadata,omitempty"`
	Name                  *string                   `json:"name,omitempty"`
	RootContentID         *string                   `json:"rootContentId,omitempty"`
	Start                 time.Time                 `json:"start"`
	TrailerVideoURL       *string                   `json:"trailerVideoUrl,omitempty"`
	UseRelativeDates      *bool                     `json:"useRelativeDates,omitempty"`
}
