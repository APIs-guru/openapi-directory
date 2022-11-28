package shared

// ConfigManagementSyncError
// An ACM created error representing a problem syncing configurations
type ConfigManagementSyncError struct {
	Code           *string                         `json:"code,omitempty"`
	ErrorMessage   *string                         `json:"errorMessage,omitempty"`
	ErrorResources []ConfigManagementErrorResource `json:"errorResources,omitempty"`
}
