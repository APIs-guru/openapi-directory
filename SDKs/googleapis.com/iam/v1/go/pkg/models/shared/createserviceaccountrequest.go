package shared

type CreateServiceAccountRequest struct {
	AccountID      *string         `json:"accountId"`
	ServiceAccount *ServiceAccount `json:"serviceAccount"`
}
