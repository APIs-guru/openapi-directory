package shared

import (
	"time"
)

// NotificationDto
// The notification DTO.
type NotificationDto struct {
	Date        *time.Time             `json:"Date,omitempty"`
	Description *string                `json:"Description,omitempty"`
	ID          *string                `json:"Id,omitempty"`
	IsRead      *bool                  `json:"IsRead,omitempty"`
	Level       *NotificationLevelEnum `json:"Level,omitempty"`
	Name        *string                `json:"Name,omitempty"`
	URL         *string                `json:"Url,omitempty"`
	UserID      *string                `json:"UserId,omitempty"`
}
