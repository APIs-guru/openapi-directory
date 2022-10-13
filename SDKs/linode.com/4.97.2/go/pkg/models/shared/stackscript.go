package shared

import (
	"time"
)

type StackScript struct {
	Created           *time.Time         `json:"created"`
	DeploymentsActive *int64             `json:"deployments_active"`
	DeploymentsTotal  *int64             `json:"deployments_total"`
	Description       *string            `json:"description"`
	ID                *int64             `json:"id"`
	Images            []string           `json:"images"`
	IsPublic          *bool              `json:"is_public"`
	Label             *string            `json:"label"`
	Mine              *bool              `json:"mine"`
	RevNote           *string            `json:"rev_note"`
	Script            *string            `json:"script"`
	Updated           *time.Time         `json:"updated"`
	UserDefinedFields []UserDefinedField `json:"user_defined_fields"`
	UserGravatarID    *string            `json:"user_gravatar_id"`
	Username          *string            `json:"username"`
}
