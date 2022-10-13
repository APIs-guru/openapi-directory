package shared

type ConfigManagementSyncError struct {
	Code           *string                         `json:"code"`
	ErrorMessage   *string                         `json:"errorMessage"`
	ErrorResources []ConfigManagementErrorResource `json:"errorResources"`
}
