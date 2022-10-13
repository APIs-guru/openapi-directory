package shared

type SdkHarnessContainerImage struct {
	Capabilities              []string `json:"capabilities"`
	ContainerImage            *string  `json:"containerImage"`
	EnvironmentID             *string  `json:"environmentId"`
	UseSingleCorePerContainer *bool    `json:"useSingleCorePerContainer"`
}
