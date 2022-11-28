package shared

// CreateServiceAccountRequestInput
// The service account create request.
type CreateServiceAccountRequestInput struct {
	AccountID      *string              `json:"accountId,omitempty"`
	ServiceAccount *ServiceAccountInput `json:"serviceAccount,omitempty"`
}
