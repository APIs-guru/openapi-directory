package shared

type AttributePropagationSettingsOutputCredentialsEnum string

const (
	AttributePropagationSettingsOutputCredentialsEnumOutputCredentialsUnspecified AttributePropagationSettingsOutputCredentialsEnum = "OUTPUT_CREDENTIALS_UNSPECIFIED"
	AttributePropagationSettingsOutputCredentialsEnumHeader                       AttributePropagationSettingsOutputCredentialsEnum = "HEADER"
	AttributePropagationSettingsOutputCredentialsEnumJwt                          AttributePropagationSettingsOutputCredentialsEnum = "JWT"
	AttributePropagationSettingsOutputCredentialsEnumRctoken                      AttributePropagationSettingsOutputCredentialsEnum = "RCTOKEN"
)

type AttributePropagationSettings struct {
	Enable            *bool                                               `json:"enable,omitempty"`
	Expression        *string                                             `json:"expression,omitempty"`
	OutputCredentials []AttributePropagationSettingsOutputCredentialsEnum `json:"outputCredentials,omitempty"`
}
