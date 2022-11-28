package shared

// LoadSnapshotRequest
// Request to load a snapshot into a Cloud Composer environment.
type LoadSnapshotRequest struct {
	SkipAirflowOverridesSetting     *bool   `json:"skipAirflowOverridesSetting,omitempty"`
	SkipEnvironmentVariablesSetting *bool   `json:"skipEnvironmentVariablesSetting,omitempty"`
	SkipGcsDataCopying              *bool   `json:"skipGcsDataCopying,omitempty"`
	SkipPypiPackagesInstallation    *bool   `json:"skipPypiPackagesInstallation,omitempty"`
	SnapshotPath                    *string `json:"snapshotPath,omitempty"`
}
