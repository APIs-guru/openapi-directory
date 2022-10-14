package shared

type ConfigManagementOciConfig struct {
	GcpServiceAccountEmail *string `json:"gcpServiceAccountEmail,omitempty"`
	PolicyDir              *string `json:"policyDir,omitempty"`
	SecretType             *string `json:"secretType,omitempty"`
	SyncRepo               *string `json:"syncRepo,omitempty"`
	SyncWaitSecs           *string `json:"syncWaitSecs,omitempty"`
}
