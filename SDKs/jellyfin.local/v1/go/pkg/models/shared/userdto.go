package shared

import (
	"time"
)

// UserDtoInput
// Class UserDto.
type UserDtoInput struct {
	Configuration             *UserConfiguration `json:"Configuration,omitempty"`
	EnableAutoLogin           *bool              `json:"EnableAutoLogin,omitempty"`
	HasConfiguredEasyPassword *bool              `json:"HasConfiguredEasyPassword,omitempty"`
	HasConfiguredPassword     *bool              `json:"HasConfiguredPassword,omitempty"`
	HasPassword               *bool              `json:"HasPassword,omitempty"`
	ID                        *string            `json:"Id,omitempty"`
	LastActivityDate          *time.Time         `json:"LastActivityDate,omitempty"`
	LastLoginDate             *time.Time         `json:"LastLoginDate,omitempty"`
	Name                      *string            `json:"Name,omitempty"`
	Policy                    *UserPolicyInput   `json:"Policy,omitempty"`
	PrimaryImageAspectRatio   *float64           `json:"PrimaryImageAspectRatio,omitempty"`
	PrimaryImageTag           *string            `json:"PrimaryImageTag,omitempty"`
	ServerID                  *string            `json:"ServerId,omitempty"`
	ServerName                *string            `json:"ServerName,omitempty"`
}

// UserDto
// Class UserDto.
type UserDto struct {
	Configuration             *UserConfiguration `json:"Configuration,omitempty"`
	EnableAutoLogin           *bool              `json:"EnableAutoLogin,omitempty"`
	HasConfiguredEasyPassword *bool              `json:"HasConfiguredEasyPassword,omitempty"`
	HasConfiguredPassword     *bool              `json:"HasConfiguredPassword,omitempty"`
	HasPassword               *bool              `json:"HasPassword,omitempty"`
	ID                        *string            `json:"Id,omitempty"`
	LastActivityDate          *time.Time         `json:"LastActivityDate,omitempty"`
	LastLoginDate             *time.Time         `json:"LastLoginDate,omitempty"`
	Name                      *string            `json:"Name,omitempty"`
	Policy                    *UserPolicy        `json:"Policy,omitempty"`
	PrimaryImageAspectRatio   *float64           `json:"PrimaryImageAspectRatio,omitempty"`
	PrimaryImageTag           *string            `json:"PrimaryImageTag,omitempty"`
	ServerID                  *string            `json:"ServerId,omitempty"`
	ServerName                *string            `json:"ServerName,omitempty"`
}
