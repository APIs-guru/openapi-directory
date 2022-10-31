package shared




type ConfigManagementBinauthzStateWebhookEnum string

const (
    ConfigManagementBinauthzStateWebhookEnumDeploymentStateUnspecified ConfigManagementBinauthzStateWebhookEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
ConfigManagementBinauthzStateWebhookEnumNotInstalled ConfigManagementBinauthzStateWebhookEnum = "NOT_INSTALLED"
ConfigManagementBinauthzStateWebhookEnumInstalled ConfigManagementBinauthzStateWebhookEnum = "INSTALLED"
ConfigManagementBinauthzStateWebhookEnumError ConfigManagementBinauthzStateWebhookEnum = "ERROR"
)


type ConfigManagementBinauthzState struct {
    Version *ConfigManagementBinauthzVersion `json:"version,omitempty"`
    Webhook *ConfigManagementBinauthzStateWebhookEnum `json:"webhook,omitempty"`
    
}

