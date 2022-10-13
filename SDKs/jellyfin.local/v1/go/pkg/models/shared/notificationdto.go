package shared

import (
	"time"
)

type NotificationDto struct {
	Date        *time.Time             `json:"Date"`
	Description *string                `json:"Description"`
	ID          *string                `json:"Id"`
	IsRead      *bool                  `json:"IsRead"`
	Level       *NotificationLevelEnum `json:"Level"`
	Name        *string                `json:"Name"`
	URL         *string                `json:"Url"`
	UserID      *string                `json:"UserId"`
}
