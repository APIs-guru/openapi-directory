package shared

// ServiceAccount
// A subscription to receive Google PubSub notifications.
type ServiceAccount struct {
	EmailAddress *string `json:"email_address,omitempty"`
	Kind         *string `json:"kind,omitempty"`
}
