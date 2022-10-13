package shared

type Action struct {
	AlwaysRun                   *bool             `json:"alwaysRun"`
	BlockExternalNetwork        *bool             `json:"blockExternalNetwork"`
	Commands                    []string          `json:"commands"`
	ContainerName               *string           `json:"containerName"`
	Credentials                 *Secret           `json:"credentials"`
	DisableImagePrefetch        *bool             `json:"disableImagePrefetch"`
	DisableStandardErrorCapture *bool             `json:"disableStandardErrorCapture"`
	EnableFuse                  *bool             `json:"enableFuse"`
	EncryptedEnvironment        *Secret           `json:"encryptedEnvironment"`
	Entrypoint                  *string           `json:"entrypoint"`
	Environment                 map[string]string `json:"environment"`
	IgnoreExitStatus            *bool             `json:"ignoreExitStatus"`
	ImageURI                    *string           `json:"imageUri"`
	Labels                      map[string]string `json:"labels"`
	Mounts                      []Mount           `json:"mounts"`
	PidNamespace                *string           `json:"pidNamespace"`
	PortMappings                map[string]int32  `json:"portMappings"`
	PublishExposedPorts         *bool             `json:"publishExposedPorts"`
	RunInBackground             *bool             `json:"runInBackground"`
	Timeout                     *string           `json:"timeout"`
}
