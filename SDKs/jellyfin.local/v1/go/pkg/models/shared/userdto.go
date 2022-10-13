package shared

import (
	"time"
)

type UserDto struct {
	Configuration             *UserConfiguration `json:"Configuration"`
	EnableAutoLogin           *bool              `json:"EnableAutoLogin"`
	HasConfiguredEasyPassword *bool              `json:"HasConfiguredEasyPassword"`
	HasConfiguredPassword     *bool              `json:"HasConfiguredPassword"`
	HasPassword               *bool              `json:"HasPassword"`
	ID                        *string            `json:"Id"`
	LastActivityDate          *time.Time         `json:"LastActivityDate"`
	LastLoginDate             *time.Time         `json:"LastLoginDate"`
	Name                      *string            `json:"Name"`
	Policy                    *UserPolicy        `json:"Policy"`
	PrimaryImageAspectRatio   *float64           `json:"PrimaryImageAspectRatio"`
	PrimaryImageTag           *string            `json:"PrimaryImageTag"`
	ServerID                  *string            `json:"ServerId"`
	ServerName                *string            `json:"ServerName"`
}
