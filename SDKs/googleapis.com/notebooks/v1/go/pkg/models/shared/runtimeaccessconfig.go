package shared

type RuntimeAccessConfigAccessTypeEnum string

const (
	RuntimeAccessConfigAccessTypeEnumRuntimeAccessTypeUnspecified RuntimeAccessConfigAccessTypeEnum = "RUNTIME_ACCESS_TYPE_UNSPECIFIED"
	RuntimeAccessConfigAccessTypeEnumSingleUser                   RuntimeAccessConfigAccessTypeEnum = "SINGLE_USER"
	RuntimeAccessConfigAccessTypeEnumServiceAccount               RuntimeAccessConfigAccessTypeEnum = "SERVICE_ACCOUNT"
)

// RuntimeAccessConfigInput
// Specifies the login configuration for Runtime
type RuntimeAccessConfigInput struct {
	AccessType   *RuntimeAccessConfigAccessTypeEnum `json:"accessType,omitempty"`
	RuntimeOwner *string                            `json:"runtimeOwner,omitempty"`
}

// RuntimeAccessConfig
// Specifies the login configuration for Runtime
type RuntimeAccessConfig struct {
	AccessType   *RuntimeAccessConfigAccessTypeEnum `json:"accessType,omitempty"`
	ProxyURI     *string                            `json:"proxyUri,omitempty"`
	RuntimeOwner *string                            `json:"runtimeOwner,omitempty"`
}
