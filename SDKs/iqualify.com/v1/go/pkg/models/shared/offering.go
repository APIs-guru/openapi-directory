package shared

import (
	"time"
)

type OfferingBadge struct {
	BadgeExpiry      *BadgeExpiry `json:"badgeExpiry"`
	Description      *string      `json:"description"`
	RequiresApproval *bool        `json:"requiresApproval"`
	Title            *string      `json:"title"`
}

type OfferingMetadata1 struct {
	Category *string  `json:"category"`
	Level    *string  `json:"level"`
	Tags     []string `json:"tags"`
	Topic    *string  `json:"topic"`
}

type Offering struct {
	Badge             *OfferingBadge     `json:"badge"`
	ContentID         *string            `json:"contentId"`
	Description       *string            `json:"description"`
	EarlyCloseOffDate *time.Time         `json:"earlyCloseOffDate"`
	End               *time.Time         `json:"end"`
	HasEarlyCloseOff  *bool              `json:"hasEarlyCloseOff"`
	Identifier        *string            `json:"identifier"`
	IsReadonly        *bool              `json:"isReadonly"`
	Metadata          *OfferingMetadata1 `json:"metadata"`
	Name              *string            `json:"name"`
	Overview          *string            `json:"overview"`
	RootContentID     *string            `json:"rootContentId"`
	Start             *time.Time         `json:"start"`
	TrailerVideoURL   *string            `json:"trailerVideoUrl"`
	UseRelativeDates  *bool              `json:"useRelativeDates"`
}
