package shared

type ActionFlagsEnum string

const (
	ActionFlagsEnumFlagUnspecified             ActionFlagsEnum = "FLAG_UNSPECIFIED"
	ActionFlagsEnumIgnoreExitStatus            ActionFlagsEnum = "IGNORE_EXIT_STATUS"
	ActionFlagsEnumRunInBackground             ActionFlagsEnum = "RUN_IN_BACKGROUND"
	ActionFlagsEnumAlwaysRun                   ActionFlagsEnum = "ALWAYS_RUN"
	ActionFlagsEnumEnableFuse                  ActionFlagsEnum = "ENABLE_FUSE"
	ActionFlagsEnumPublishExposedPorts         ActionFlagsEnum = "PUBLISH_EXPOSED_PORTS"
	ActionFlagsEnumDisableImagePrefetch        ActionFlagsEnum = "DISABLE_IMAGE_PREFETCH"
	ActionFlagsEnumDisableStandardErrorCapture ActionFlagsEnum = "DISABLE_STANDARD_ERROR_CAPTURE"
	ActionFlagsEnumBlockExternalNetwork        ActionFlagsEnum = "BLOCK_EXTERNAL_NETWORK"
)

type Action struct {
	Commands             []string          `json:"commands"`
	Credentials          *Secret           `json:"credentials"`
	EncryptedEnvironment *Secret           `json:"encryptedEnvironment"`
	Entrypoint           *string           `json:"entrypoint"`
	Environment          map[string]string `json:"environment"`
	Flags                []ActionFlagsEnum `json:"flags"`
	ImageURI             *string           `json:"imageUri"`
	Labels               map[string]string `json:"labels"`
	Mounts               []Mount           `json:"mounts"`
	Name                 *string           `json:"name"`
	PidNamespace         *string           `json:"pidNamespace"`
	PortMappings         map[string]int32  `json:"portMappings"`
	Timeout              *string           `json:"timeout"`
}
