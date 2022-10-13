package shared

type AttributePropagationSettingsOutputCredentialsEnum string

const (
	AttributePropagationSettingsOutputCredentialsEnumOutputCredentialsUnspecified AttributePropagationSettingsOutputCredentialsEnum = "OUTPUT_CREDENTIALS_UNSPECIFIED"
	AttributePropagationSettingsOutputCredentialsEnumHeader                       AttributePropagationSettingsOutputCredentialsEnum = "HEADER"
	AttributePropagationSettingsOutputCredentialsEnumJwt                          AttributePropagationSettingsOutputCredentialsEnum = "JWT"
	AttributePropagationSettingsOutputCredentialsEnumRctoken                      AttributePropagationSettingsOutputCredentialsEnum = "RCTOKEN"
)

type AttributePropagationSettings struct {
	Enable            *bool                                               `json:"enable"`
	Expression        *string                                             `json:"expression"`
	OutputCredentials []AttributePropagationSettingsOutputCredentialsEnum `json:"outputCredentials"`
}
