package shared

// ConfigManagementConfigSyncVersion
// Specific versioning information pertaining to ConfigSync's Pods
type ConfigManagementConfigSyncVersion struct {
	AdmissionWebhook  *string `json:"admissionWebhook,omitempty"`
	GitSync           *string `json:"gitSync,omitempty"`
	Importer          *string `json:"importer,omitempty"`
	Monitor           *string `json:"monitor,omitempty"`
	ReconcilerManager *string `json:"reconcilerManager,omitempty"`
	RootReconciler    *string `json:"rootReconciler,omitempty"`
	Syncer            *string `json:"syncer,omitempty"`
}
