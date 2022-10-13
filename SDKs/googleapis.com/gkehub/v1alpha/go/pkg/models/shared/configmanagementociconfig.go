package shared

type ConfigManagementOciConfig struct {
	GcpServiceAccountEmail *string `json:"gcpServiceAccountEmail"`
	PolicyDir              *string `json:"policyDir"`
	SecretType             *string `json:"secretType"`
	SyncRepo               *string `json:"syncRepo"`
	SyncWaitSecs           *string `json:"syncWaitSecs"`
}
