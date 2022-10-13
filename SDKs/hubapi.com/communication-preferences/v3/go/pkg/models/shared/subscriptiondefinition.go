package shared

import (
	"time"
)

type SubscriptionDefinition struct {
	CommunicationMethod *string   `json:"communicationMethod"`
	CreatedAt           time.Time `json:"createdAt"`
	Description         string    `json:"description"`
	ID                  string    `json:"id"`
	IsActive            bool      `json:"isActive"`
	IsDefault           bool      `json:"isDefault"`
	IsInternal          bool      `json:"isInternal"`
	Name                string    `json:"name"`
	Purpose             *string   `json:"purpose"`
	UpdatedAt           time.Time `json:"updatedAt"`
}
