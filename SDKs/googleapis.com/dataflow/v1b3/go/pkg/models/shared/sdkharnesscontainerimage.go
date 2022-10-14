package shared

type SdkHarnessContainerImage struct {
	Capabilities              []string `json:"capabilities,omitempty"`
	ContainerImage            *string  `json:"containerImage,omitempty"`
	EnvironmentID             *string  `json:"environmentId,omitempty"`
	UseSingleCorePerContainer *bool    `json:"useSingleCorePerContainer,omitempty"`
}
