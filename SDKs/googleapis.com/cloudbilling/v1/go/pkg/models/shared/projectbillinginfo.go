package shared

// ProjectBillingInfo
// Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).
type ProjectBillingInfo struct {
	BillingAccountName *string `json:"billingAccountName,omitempty"`
	BillingEnabled     *bool   `json:"billingEnabled,omitempty"`
	Name               *string `json:"name,omitempty"`
	ProjectID          *string `json:"projectId,omitempty"`
}
