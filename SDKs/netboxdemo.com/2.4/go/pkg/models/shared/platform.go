package shared

type PlatformRPCClientLegacyRPCClientEnum string

const (
	PlatformRPCClientLegacyRPCClientEnumJuniperJunos PlatformRPCClientLegacyRPCClientEnum = "juniper-junos"
	PlatformRPCClientLegacyRPCClientEnumCiscoIos     PlatformRPCClientLegacyRPCClientEnum = "cisco-ios"
	PlatformRPCClientLegacyRPCClientEnumOpengear     PlatformRPCClientLegacyRPCClientEnum = "opengear"
)

type Platform struct {
	ID           *int64                                `json:"id"`
	Manufacturer *NestedManufacturer                   `json:"manufacturer"`
	Name         string                                `json:"name"`
	NapalmArgs   *string                               `json:"napalm_args"`
	NapalmDriver *string                               `json:"napalm_driver"`
	RPCClient    *PlatformRPCClientLegacyRPCClientEnum `json:"rpc_client"`
	Slug         string                                `json:"slug"`
}
