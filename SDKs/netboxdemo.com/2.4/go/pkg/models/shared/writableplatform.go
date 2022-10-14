package shared

type WritablePlatformRPCClientLegacyRPCClientEnum string

const (
	WritablePlatformRPCClientLegacyRPCClientEnumJuniperJunos WritablePlatformRPCClientLegacyRPCClientEnum = "juniper-junos"
	WritablePlatformRPCClientLegacyRPCClientEnumCiscoIos     WritablePlatformRPCClientLegacyRPCClientEnum = "cisco-ios"
	WritablePlatformRPCClientLegacyRPCClientEnumOpengear     WritablePlatformRPCClientLegacyRPCClientEnum = "opengear"
)

type WritablePlatform struct {
	ID           *int64                                        `json:"id,omitempty"`
	Manufacturer *int64                                        `json:"manufacturer,omitempty"`
	Name         string                                        `json:"name"`
	NapalmArgs   *string                                       `json:"napalm_args,omitempty"`
	NapalmDriver *string                                       `json:"napalm_driver,omitempty"`
	RPCClient    *WritablePlatformRPCClientLegacyRPCClientEnum `json:"rpc_client,omitempty"`
	Slug         string                                        `json:"slug"`
}
