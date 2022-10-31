package shared




type PlatformLegacyRPCClientEnum string

const (
    PlatformLegacyRPCClientEnumJuniperJunos PlatformLegacyRPCClientEnum = "juniper-junos"
PlatformLegacyRPCClientEnumCiscoIos PlatformLegacyRPCClientEnum = "cisco-ios"
PlatformLegacyRPCClientEnumOpengear PlatformLegacyRPCClientEnum = "opengear"
)


type Platform struct {
    ID *int64 `json:"id,omitempty"`
    Manufacturer *NestedManufacturer `json:"manufacturer,omitempty"`
    Name string `json:"name"`
    NapalmArgs *string `json:"napalm_args,omitempty"`
    NapalmDriver *string `json:"napalm_driver,omitempty"`
    RPCClient *PlatformLegacyRPCClientEnum `json:"rpc_client,omitempty"`
    Slug string `json:"slug"`
    
}

