package shared

type ConfigManagementConfigSyncVersion struct {
	AdmissionWebhook  *string `json:"admissionWebhook"`
	GitSync           *string `json:"gitSync"`
	Importer          *string `json:"importer"`
	Monitor           *string `json:"monitor"`
	ReconcilerManager *string `json:"reconcilerManager"`
	RootReconciler    *string `json:"rootReconciler"`
	Syncer            *string `json:"syncer"`
}
