package shared

// SDKHarnessContainerImage
// Defines an SDK harness container for executing Dataflow pipelines.
type SDKHarnessContainerImage struct {
	Capabilities              []string `json:"capabilities,omitempty"`
	ContainerImage            *string  `json:"containerImage,omitempty"`
	EnvironmentID             *string  `json:"environmentId,omitempty"`
	UseSingleCorePerContainer *bool    `json:"useSingleCorePerContainer,omitempty"`
}
