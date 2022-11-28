package shared

// RestoreDomainRequest
// RestoreDomainRequest is the request received by RestoreDomain rpc
type RestoreDomainRequest struct {
	BackupID *string `json:"backupId,omitempty"`
}
