package shared

type WebhookConfigStateEnum string

const (
	WebhookConfigStateEnumStateUnspecified WebhookConfigStateEnum = "STATE_UNSPECIFIED"
	WebhookConfigStateEnumOk               WebhookConfigStateEnum = "OK"
	WebhookConfigStateEnumSecretDeleted    WebhookConfigStateEnum = "SECRET_DELETED"
)

// WebhookConfig
// WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL.
type WebhookConfig struct {
	Secret *string                 `json:"secret,omitempty"`
	State  *WebhookConfigStateEnum `json:"state,omitempty"`
}
