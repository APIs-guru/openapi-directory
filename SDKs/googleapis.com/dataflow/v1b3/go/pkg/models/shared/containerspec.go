package shared

// ContainerSpec
// Container Spec.
type ContainerSpec struct {
	DefaultEnvironment              *FlexTemplateRuntimeEnvironment `json:"defaultEnvironment,omitempty"`
	Image                           *string                         `json:"image,omitempty"`
	ImageRepositoryCertPath         *string                         `json:"imageRepositoryCertPath,omitempty"`
	ImageRepositoryPasswordSecretID *string                         `json:"imageRepositoryPasswordSecretId,omitempty"`
	ImageRepositoryUsernameSecretID *string                         `json:"imageRepositoryUsernameSecretId,omitempty"`
	Metadata                        *TemplateMetadata               `json:"metadata,omitempty"`
	SdkInfo                         *SDKInfo                        `json:"sdkInfo,omitempty"`
}
