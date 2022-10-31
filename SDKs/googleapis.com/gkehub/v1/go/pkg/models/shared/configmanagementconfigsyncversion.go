package shared



type ConfigManagementConfigSyncVersion struct {
    AdmissionWebhook *string `json:"admissionWebhook,omitempty"`
    GitSync *string `json:"gitSync,omitempty"`
    Importer *string `json:"importer,omitempty"`
    Monitor *string `json:"monitor,omitempty"`
    ReconcilerManager *string `json:"reconcilerManager,omitempty"`
    RootReconciler *string `json:"rootReconciler,omitempty"`
    Syncer *string `json:"syncer,omitempty"`
    
}

