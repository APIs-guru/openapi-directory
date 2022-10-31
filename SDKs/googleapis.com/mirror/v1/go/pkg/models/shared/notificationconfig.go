package shared

import (
	"time"
)

type NotificationConfig struct {
	DeliveryTime *time.Time `json:"deliveryTime,omitempty"`
	Level        *string    `json:"level,omitempty"`
}
