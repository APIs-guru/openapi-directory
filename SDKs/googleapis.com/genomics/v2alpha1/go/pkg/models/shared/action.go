package shared




type ActionFlagsEnum string

const (
    ActionFlagsEnumFlagUnspecified ActionFlagsEnum = "FLAG_UNSPECIFIED"
ActionFlagsEnumIgnoreExitStatus ActionFlagsEnum = "IGNORE_EXIT_STATUS"
ActionFlagsEnumRunInBackground ActionFlagsEnum = "RUN_IN_BACKGROUND"
ActionFlagsEnumAlwaysRun ActionFlagsEnum = "ALWAYS_RUN"
ActionFlagsEnumEnableFuse ActionFlagsEnum = "ENABLE_FUSE"
ActionFlagsEnumPublishExposedPorts ActionFlagsEnum = "PUBLISH_EXPOSED_PORTS"
ActionFlagsEnumDisableImagePrefetch ActionFlagsEnum = "DISABLE_IMAGE_PREFETCH"
ActionFlagsEnumDisableStandardErrorCapture ActionFlagsEnum = "DISABLE_STANDARD_ERROR_CAPTURE"
ActionFlagsEnumBlockExternalNetwork ActionFlagsEnum = "BLOCK_EXTERNAL_NETWORK"
)


type Action struct {
    Commands []string `json:"commands,omitempty"`
    Credentials *Secret `json:"credentials,omitempty"`
    EncryptedEnvironment *Secret `json:"encryptedEnvironment,omitempty"`
    Entrypoint *string `json:"entrypoint,omitempty"`
    Environment map[string]string `json:"environment,omitempty"`
    Flags []ActionFlagsEnum `json:"flags,omitempty"`
    ImageURI *string `json:"imageUri,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Mounts []Mount `json:"mounts,omitempty"`
    Name *string `json:"name,omitempty"`
    PidNamespace *string `json:"pidNamespace,omitempty"`
    PortMappings map[string]int32 `json:"portMappings,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    
}

