package shared



type LoadSnapshotRequest struct {
    SkipPypiPackagesInstallation *bool `json:"skipPypiPackagesInstallation,omitempty"`
    SnapshotPath *string `json:"snapshotPath,omitempty"`
    
}

