package shared

import (
	"time"
)

// NotificationConfig
// Controls how notifications for a timeline item are presented to the user.
type NotificationConfig struct {
	DeliveryTime *time.Time `json:"deliveryTime,omitempty"`
	Level        *string    `json:"level,omitempty"`
}
