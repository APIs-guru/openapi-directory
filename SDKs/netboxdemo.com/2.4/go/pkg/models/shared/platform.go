package shared

type PlatformRPCClientLegacyRPCClientEnum string

const (
	PlatformRPCClientLegacyRPCClientEnumJuniperJunos PlatformRPCClientLegacyRPCClientEnum = "juniper-junos"
	PlatformRPCClientLegacyRPCClientEnumCiscoIos     PlatformRPCClientLegacyRPCClientEnum = "cisco-ios"
	PlatformRPCClientLegacyRPCClientEnumOpengear     PlatformRPCClientLegacyRPCClientEnum = "opengear"
)

type Platform struct {
	ID           *int64                                `json:"id,omitempty"`
	Manufacturer *NestedManufacturer                   `json:"manufacturer,omitempty"`
	Name         string                                `json:"name"`
	NapalmArgs   *string                               `json:"napalm_args,omitempty"`
	NapalmDriver *string                               `json:"napalm_driver,omitempty"`
	RPCClient    *PlatformRPCClientLegacyRPCClientEnum `json:"rpc_client,omitempty"`
	Slug         string                                `json:"slug"`
}
