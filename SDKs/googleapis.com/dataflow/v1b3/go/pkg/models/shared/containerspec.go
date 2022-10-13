package shared

type ContainerSpec struct {
	DefaultEnvironment              *FlexTemplateRuntimeEnvironment `json:"defaultEnvironment"`
	Image                           *string                         `json:"image"`
	ImageRepositoryCertPath         *string                         `json:"imageRepositoryCertPath"`
	ImageRepositoryPasswordSecretID *string                         `json:"imageRepositoryPasswordSecretId"`
	ImageRepositoryUsernameSecretID *string                         `json:"imageRepositoryUsernameSecretId"`
	Metadata                        *TemplateMetadata               `json:"metadata"`
	SdkInfo                         *SdkInfo                        `json:"sdkInfo"`
}
