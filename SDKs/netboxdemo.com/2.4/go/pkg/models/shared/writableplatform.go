package shared

type WritablePlatformRPCClientLegacyRPCClientEnum string

const (
	WritablePlatformRPCClientLegacyRPCClientEnumJuniperJunos WritablePlatformRPCClientLegacyRPCClientEnum = "juniper-junos"
	WritablePlatformRPCClientLegacyRPCClientEnumCiscoIos     WritablePlatformRPCClientLegacyRPCClientEnum = "cisco-ios"
	WritablePlatformRPCClientLegacyRPCClientEnumOpengear     WritablePlatformRPCClientLegacyRPCClientEnum = "opengear"
)

type WritablePlatform struct {
	ID           *int64                                        `json:"id"`
	Manufacturer *int64                                        `json:"manufacturer"`
	Name         string                                        `json:"name"`
	NapalmArgs   *string                                       `json:"napalm_args"`
	NapalmDriver *string                                       `json:"napalm_driver"`
	RPCClient    *WritablePlatformRPCClientLegacyRPCClientEnum `json:"rpc_client"`
	Slug         string                                        `json:"slug"`
}
