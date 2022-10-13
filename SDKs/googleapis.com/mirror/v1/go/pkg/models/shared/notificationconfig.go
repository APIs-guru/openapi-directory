package shared

import (
	"time"
)

type NotificationConfig struct {
	DeliveryTime *time.Time `json:"deliveryTime"`
	Level        *string    `json:"level"`
}
