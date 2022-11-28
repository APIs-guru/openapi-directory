package shared

type AttributePropagationSettingsOutputCredentialsEnum string

const (
	AttributePropagationSettingsOutputCredentialsEnumOutputCredentialsUnspecified AttributePropagationSettingsOutputCredentialsEnum = "OUTPUT_CREDENTIALS_UNSPECIFIED"
	AttributePropagationSettingsOutputCredentialsEnumHeader                       AttributePropagationSettingsOutputCredentialsEnum = "HEADER"
	AttributePropagationSettingsOutputCredentialsEnumJwt                          AttributePropagationSettingsOutputCredentialsEnum = "JWT"
	AttributePropagationSettingsOutputCredentialsEnumRctoken                      AttributePropagationSettingsOutputCredentialsEnum = "RCTOKEN"
)

// AttributePropagationSettings
// Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
type AttributePropagationSettings struct {
	Enable            *bool                                               `json:"enable,omitempty"`
	Expression        *string                                             `json:"expression,omitempty"`
	OutputCredentials []AttributePropagationSettingsOutputCredentialsEnum `json:"outputCredentials,omitempty"`
}
