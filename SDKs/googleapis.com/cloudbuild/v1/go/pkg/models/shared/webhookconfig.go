package shared

type WebhookConfigStateEnum string

const (
	WebhookConfigStateEnumStateUnspecified WebhookConfigStateEnum = "STATE_UNSPECIFIED"
	WebhookConfigStateEnumOk               WebhookConfigStateEnum = "OK"
	WebhookConfigStateEnumSecretDeleted    WebhookConfigStateEnum = "SECRET_DELETED"
)

type WebhookConfig struct {
	Secret *string                 `json:"secret"`
	State  *WebhookConfigStateEnum `json:"state"`
}
