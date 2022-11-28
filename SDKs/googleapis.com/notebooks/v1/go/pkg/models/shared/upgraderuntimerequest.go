package shared

// UpgradeRuntimeRequest
// Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = "TRUSTED_TESTER,SPECIAL_TESTER";
type UpgradeRuntimeRequest struct {
	RequestID *string `json:"requestId,omitempty"`
}
