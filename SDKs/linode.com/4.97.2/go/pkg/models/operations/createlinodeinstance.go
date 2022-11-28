package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLinodeInstanceRequestBody struct {
	AuthorizedKeys  []string                       `json:"authorized_keys,omitempty"`
	AuthorizedUsers []string                       `json:"authorized_users,omitempty"`
	BackupID        *int64                         `json:"backup_id,omitempty"`
	BackupsEnabled  *bool                          `json:"backups_enabled,omitempty"`
	Booted          *bool                          `json:"booted,omitempty"`
	Group           *string                        `json:"group,omitempty"`
	Image           *string                        `json:"image,omitempty"`
	Interfaces      []shared.LinodeConfigInterface `json:"interfaces,omitempty"`
	Label           *string                        `json:"label,omitempty"`
	PrivateIP       *bool                          `json:"private_ip,omitempty"`
	Region          string                         `json:"region"`
	RootPass        *string                        `json:"root_pass,omitempty"`
	StackscriptData map[string]interface{}         `json:"stackscript_data,omitempty"`
	StackscriptID   *int64                         `json:"stackscript_id,omitempty"`
	SwapSize        *int64                         `json:"swap_size,omitempty"`
	Tags            []string                       `json:"tags,omitempty"`
	Type            string                         `json:"type"`
}

type CreateLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateLinodeInstanceRequest struct {
	Request  CreateLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security CreateLinodeInstanceSecurity
}

type CreateLinodeInstanceResponse struct {
	ContentType                                      string
	Linode                                           *shared.Linode
	StatusCode                                       int64
	CreateLinodeInstanceDefaultApplicationJSONObject *CreateLinodeInstanceDefaultApplicationJSON
}
