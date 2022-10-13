package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLinodeInstanceRequestBody struct {
	AuthorizedKeys  []string                       `json:"authorized_keys"`
	AuthorizedUsers []string                       `json:"authorized_users"`
	BackupID        *int64                         `json:"backup_id"`
	BackupsEnabled  *bool                          `json:"backups_enabled"`
	Booted          *bool                          `json:"booted"`
	Group           *string                        `json:"group"`
	Image           *string                        `json:"image"`
	Interfaces      []shared.LinodeConfigInterface `json:"interfaces"`
	Label           *string                        `json:"label"`
	PrivateIP       *bool                          `json:"private_ip"`
	Region          string                         `json:"region"`
	RootPass        *string                        `json:"root_pass"`
	StackscriptData map[string]interface{}         `json:"stackscript_data"`
	StackscriptID   *int64                         `json:"stackscript_id"`
	SwapSize        *int64                         `json:"swap_size"`
	Tags            []string                       `json:"tags"`
	Type            string                         `json:"type"`
}

type CreateLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateLinodeInstanceSecurity struct {
	Option1 *CreateLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *CreateLinodeInstanceSecurityOption2 `security:"option"`
}

type CreateLinodeInstanceRequest struct {
	Request  CreateLinodeInstanceRequestBody `request:"mediaType=application/json"`
	Security CreateLinodeInstanceSecurity
}

type CreateLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateLinodeInstanceResponse struct {
	ContentType                                      string
	Linode                                           *shared.Linode
	StatusCode                                       int64
	CreateLinodeInstanceDefaultApplicationJSONObject *CreateLinodeInstanceDefaultApplicationJSON
}
