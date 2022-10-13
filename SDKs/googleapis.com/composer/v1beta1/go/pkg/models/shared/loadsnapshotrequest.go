package shared

type LoadSnapshotRequest struct {
	SkipPypiPackagesInstallation *bool   `json:"skipPypiPackagesInstallation"`
	SnapshotPath                 *string `json:"snapshotPath"`
}
