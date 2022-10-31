package shared

type Action struct {
	AlwaysRun                   *bool             `json:"alwaysRun,omitempty"`
	BlockExternalNetwork        *bool             `json:"blockExternalNetwork,omitempty"`
	Commands                    []string          `json:"commands,omitempty"`
	ContainerName               *string           `json:"containerName,omitempty"`
	Credentials                 *Secret           `json:"credentials,omitempty"`
	DisableImagePrefetch        *bool             `json:"disableImagePrefetch,omitempty"`
	DisableStandardErrorCapture *bool             `json:"disableStandardErrorCapture,omitempty"`
	EnableFuse                  *bool             `json:"enableFuse,omitempty"`
	EncryptedEnvironment        *Secret           `json:"encryptedEnvironment,omitempty"`
	Entrypoint                  *string           `json:"entrypoint,omitempty"`
	Environment                 map[string]string `json:"environment,omitempty"`
	IgnoreExitStatus            *bool             `json:"ignoreExitStatus,omitempty"`
	ImageURI                    *string           `json:"imageUri,omitempty"`
	Labels                      map[string]string `json:"labels,omitempty"`
	Mounts                      []Mount           `json:"mounts,omitempty"`
	PidNamespace                *string           `json:"pidNamespace,omitempty"`
	PortMappings                map[string]int32  `json:"portMappings,omitempty"`
	PublishExposedPorts         *bool             `json:"publishExposedPorts,omitempty"`
	RunInBackground             *bool             `json:"runInBackground,omitempty"`
	Timeout                     *string           `json:"timeout,omitempty"`
}
