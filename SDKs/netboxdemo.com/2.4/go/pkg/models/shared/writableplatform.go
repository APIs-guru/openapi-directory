package shared

type WritablePlatformLegacyRPCClientEnum string

const (
	WritablePlatformLegacyRPCClientEnumJuniperJunos WritablePlatformLegacyRPCClientEnum = "juniper-junos"
	WritablePlatformLegacyRPCClientEnumCiscoIos     WritablePlatformLegacyRPCClientEnum = "cisco-ios"
	WritablePlatformLegacyRPCClientEnumOpengear     WritablePlatformLegacyRPCClientEnum = "opengear"
)

type WritablePlatformInput struct {
	Manufacturer *int64                               `json:"manufacturer,omitempty"`
	Name         string                               `json:"name"`
	NapalmArgs   *string                              `json:"napalm_args,omitempty"`
	NapalmDriver *string                              `json:"napalm_driver,omitempty"`
	RPCClient    *WritablePlatformLegacyRPCClientEnum `json:"rpc_client,omitempty"`
	Slug         string                               `json:"slug"`
}
