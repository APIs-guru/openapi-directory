package shared

type UndeleteServiceAccountResponse struct {
	RestoredAccount *ServiceAccount `json:"restoredAccount,omitempty"`
}
