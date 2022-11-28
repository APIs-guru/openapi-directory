package shared

// ConfigManagementInstallError
// Errors pertaining to the installation of ACM
type ConfigManagementInstallError struct {
	ErrorMessage *string `json:"errorMessage,omitempty"`
}
