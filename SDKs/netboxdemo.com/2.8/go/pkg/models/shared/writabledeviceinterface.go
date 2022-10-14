package shared

type WritableDeviceInterfaceModeModeEnum string

const (
	WritableDeviceInterfaceModeModeEnumAccess    WritableDeviceInterfaceModeModeEnum = "access"
	WritableDeviceInterfaceModeModeEnumTagged    WritableDeviceInterfaceModeModeEnum = "tagged"
	WritableDeviceInterfaceModeModeEnumTaggedAll WritableDeviceInterfaceModeModeEnum = "tagged-all"
)

type WritableDeviceInterfaceTypeTypeEnum string

const (
	WritableDeviceInterfaceTypeTypeEnumVirtual                          WritableDeviceInterfaceTypeTypeEnum = "virtual"
	WritableDeviceInterfaceTypeTypeEnumLag                              WritableDeviceInterfaceTypeTypeEnum = "lag"
	WritableDeviceInterfaceTypeTypeEnumOneHundredbaseTx                 WritableDeviceInterfaceTypeTypeEnum = "100base-tx"
	WritableDeviceInterfaceTypeTypeEnumOneThousandbaseT                 WritableDeviceInterfaceTypeTypeEnum = "1000base-t"
	WritableDeviceInterfaceTypeTypeEnumTwo5gbaseT                       WritableDeviceInterfaceTypeTypeEnum = "2.5gbase-t"
	WritableDeviceInterfaceTypeTypeEnumFivegbaseT                       WritableDeviceInterfaceTypeTypeEnum = "5gbase-t"
	WritableDeviceInterfaceTypeTypeEnumTengbaseT                        WritableDeviceInterfaceTypeTypeEnum = "10gbase-t"
	WritableDeviceInterfaceTypeTypeEnumTengbaseCx4                      WritableDeviceInterfaceTypeTypeEnum = "10gbase-cx4"
	WritableDeviceInterfaceTypeTypeEnumOneThousandbaseXGbic             WritableDeviceInterfaceTypeTypeEnum = "1000base-x-gbic"
	WritableDeviceInterfaceTypeTypeEnumOneThousandbaseXSfp              WritableDeviceInterfaceTypeTypeEnum = "1000base-x-sfp"
	WritableDeviceInterfaceTypeTypeEnumTengbaseXSfpp                    WritableDeviceInterfaceTypeTypeEnum = "10gbase-x-sfpp"
	WritableDeviceInterfaceTypeTypeEnumTengbaseXXfp                     WritableDeviceInterfaceTypeTypeEnum = "10gbase-x-xfp"
	WritableDeviceInterfaceTypeTypeEnumTengbaseXXenpak                  WritableDeviceInterfaceTypeTypeEnum = "10gbase-x-xenpak"
	WritableDeviceInterfaceTypeTypeEnumTengbaseXx2                      WritableDeviceInterfaceTypeTypeEnum = "10gbase-x-x2"
	WritableDeviceInterfaceTypeTypeEnumTwentyFivegbaseXSfp28            WritableDeviceInterfaceTypeTypeEnum = "25gbase-x-sfp28"
	WritableDeviceInterfaceTypeTypeEnumFortygbaseXQsfpp                 WritableDeviceInterfaceTypeTypeEnum = "40gbase-x-qsfpp"
	WritableDeviceInterfaceTypeTypeEnumFiftygbaseXSfp28                 WritableDeviceInterfaceTypeTypeEnum = "50gbase-x-sfp28"
	WritableDeviceInterfaceTypeTypeEnumOneHundredgbaseXCfp              WritableDeviceInterfaceTypeTypeEnum = "100gbase-x-cfp"
	WritableDeviceInterfaceTypeTypeEnumOneHundredgbaseXCfp2             WritableDeviceInterfaceTypeTypeEnum = "100gbase-x-cfp2"
	WritableDeviceInterfaceTypeTypeEnumTwoHundredgbaseXCfp2             WritableDeviceInterfaceTypeTypeEnum = "200gbase-x-cfp2"
	WritableDeviceInterfaceTypeTypeEnumOneHundredgbaseXCfp4             WritableDeviceInterfaceTypeTypeEnum = "100gbase-x-cfp4"
	WritableDeviceInterfaceTypeTypeEnumOneHundredgbaseXCpak             WritableDeviceInterfaceTypeTypeEnum = "100gbase-x-cpak"
	WritableDeviceInterfaceTypeTypeEnumOneHundredgbaseXQsfp28           WritableDeviceInterfaceTypeTypeEnum = "100gbase-x-qsfp28"
	WritableDeviceInterfaceTypeTypeEnumTwoHundredgbaseXQsfp56           WritableDeviceInterfaceTypeTypeEnum = "200gbase-x-qsfp56"
	WritableDeviceInterfaceTypeTypeEnumFourHundredgbaseXQsfpdd          WritableDeviceInterfaceTypeTypeEnum = "400gbase-x-qsfpdd"
	WritableDeviceInterfaceTypeTypeEnumFourHundredgbaseXOsfp            WritableDeviceInterfaceTypeTypeEnum = "400gbase-x-osfp"
	WritableDeviceInterfaceTypeTypeEnumIeee80211a                       WritableDeviceInterfaceTypeTypeEnum = "ieee802.11a"
	WritableDeviceInterfaceTypeTypeEnumIeee80211g                       WritableDeviceInterfaceTypeTypeEnum = "ieee802.11g"
	WritableDeviceInterfaceTypeTypeEnumIeee80211n                       WritableDeviceInterfaceTypeTypeEnum = "ieee802.11n"
	WritableDeviceInterfaceTypeTypeEnumIeee80211ac                      WritableDeviceInterfaceTypeTypeEnum = "ieee802.11ac"
	WritableDeviceInterfaceTypeTypeEnumIeee80211ad                      WritableDeviceInterfaceTypeTypeEnum = "ieee802.11ad"
	WritableDeviceInterfaceTypeTypeEnumIeee80211ax                      WritableDeviceInterfaceTypeTypeEnum = "ieee802.11ax"
	WritableDeviceInterfaceTypeTypeEnumGsm                              WritableDeviceInterfaceTypeTypeEnum = "gsm"
	WritableDeviceInterfaceTypeTypeEnumCdma                             WritableDeviceInterfaceTypeTypeEnum = "cdma"
	WritableDeviceInterfaceTypeTypeEnumLte                              WritableDeviceInterfaceTypeTypeEnum = "lte"
	WritableDeviceInterfaceTypeTypeEnumSonetOc3                         WritableDeviceInterfaceTypeTypeEnum = "sonet-oc3"
	WritableDeviceInterfaceTypeTypeEnumSonetOc12                        WritableDeviceInterfaceTypeTypeEnum = "sonet-oc12"
	WritableDeviceInterfaceTypeTypeEnumSonetOc48                        WritableDeviceInterfaceTypeTypeEnum = "sonet-oc48"
	WritableDeviceInterfaceTypeTypeEnumSonetOc192                       WritableDeviceInterfaceTypeTypeEnum = "sonet-oc192"
	WritableDeviceInterfaceTypeTypeEnumSonetOc768                       WritableDeviceInterfaceTypeTypeEnum = "sonet-oc768"
	WritableDeviceInterfaceTypeTypeEnumSonetOc1920                      WritableDeviceInterfaceTypeTypeEnum = "sonet-oc1920"
	WritableDeviceInterfaceTypeTypeEnumSonetOc3840                      WritableDeviceInterfaceTypeTypeEnum = "sonet-oc3840"
	WritableDeviceInterfaceTypeTypeEnumOnegfcSfp                        WritableDeviceInterfaceTypeTypeEnum = "1gfc-sfp"
	WritableDeviceInterfaceTypeTypeEnumTwogfcSfp                        WritableDeviceInterfaceTypeTypeEnum = "2gfc-sfp"
	WritableDeviceInterfaceTypeTypeEnumFourgfcSfp                       WritableDeviceInterfaceTypeTypeEnum = "4gfc-sfp"
	WritableDeviceInterfaceTypeTypeEnumEightgfcSfpp                     WritableDeviceInterfaceTypeTypeEnum = "8gfc-sfpp"
	WritableDeviceInterfaceTypeTypeEnumSixteengfcSfpp                   WritableDeviceInterfaceTypeTypeEnum = "16gfc-sfpp"
	WritableDeviceInterfaceTypeTypeEnumThirtyTwogfcSfp28                WritableDeviceInterfaceTypeTypeEnum = "32gfc-sfp28"
	WritableDeviceInterfaceTypeTypeEnumOneHundredAndTwentyEightgfcSfp28 WritableDeviceInterfaceTypeTypeEnum = "128gfc-sfp28"
	WritableDeviceInterfaceTypeTypeEnumInfinibandSdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-sdr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandDdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-ddr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandQdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-qdr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandFdr10                  WritableDeviceInterfaceTypeTypeEnum = "infiniband-fdr10"
	WritableDeviceInterfaceTypeTypeEnumInfinibandFdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-fdr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandEdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-edr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandHdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-hdr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandNdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-ndr"
	WritableDeviceInterfaceTypeTypeEnumInfinibandXdr                    WritableDeviceInterfaceTypeTypeEnum = "infiniband-xdr"
	WritableDeviceInterfaceTypeTypeEnumT1                               WritableDeviceInterfaceTypeTypeEnum = "t1"
	WritableDeviceInterfaceTypeTypeEnumE1                               WritableDeviceInterfaceTypeTypeEnum = "e1"
	WritableDeviceInterfaceTypeTypeEnumT3                               WritableDeviceInterfaceTypeTypeEnum = "t3"
	WritableDeviceInterfaceTypeTypeEnumE3                               WritableDeviceInterfaceTypeTypeEnum = "e3"
	WritableDeviceInterfaceTypeTypeEnumCiscoStackwise                   WritableDeviceInterfaceTypeTypeEnum = "cisco-stackwise"
	WritableDeviceInterfaceTypeTypeEnumCiscoStackwisePlus               WritableDeviceInterfaceTypeTypeEnum = "cisco-stackwise-plus"
	WritableDeviceInterfaceTypeTypeEnumCiscoFlexstack                   WritableDeviceInterfaceTypeTypeEnum = "cisco-flexstack"
	WritableDeviceInterfaceTypeTypeEnumCiscoFlexstackPlus               WritableDeviceInterfaceTypeTypeEnum = "cisco-flexstack-plus"
	WritableDeviceInterfaceTypeTypeEnumJuniperVcp                       WritableDeviceInterfaceTypeTypeEnum = "juniper-vcp"
	WritableDeviceInterfaceTypeTypeEnumExtremeSummitstack               WritableDeviceInterfaceTypeTypeEnum = "extreme-summitstack"
	WritableDeviceInterfaceTypeTypeEnumExtremeSummitstack128            WritableDeviceInterfaceTypeTypeEnum = "extreme-summitstack-128"
	WritableDeviceInterfaceTypeTypeEnumExtremeSummitstack256            WritableDeviceInterfaceTypeTypeEnum = "extreme-summitstack-256"
	WritableDeviceInterfaceTypeTypeEnumExtremeSummitstack512            WritableDeviceInterfaceTypeTypeEnum = "extreme-summitstack-512"
	WritableDeviceInterfaceTypeTypeEnumOther                            WritableDeviceInterfaceTypeTypeEnum = "other"
)

type WritableDeviceInterface struct {
	Cable                 *NestedCable                         `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                    `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                              `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *bool                                `json:"connection_status,omitempty"`
	CountIpaddresses      *int64                               `json:"count_ipaddresses,omitempty"`
	Description           *string                              `json:"description,omitempty"`
	Device                int64                                `json:"device"`
	Enabled               *bool                                `json:"enabled,omitempty"`
	ID                    *int64                               `json:"id,omitempty"`
	Lag                   *int64                               `json:"lag,omitempty"`
	MacAddress            *string                              `json:"mac_address,omitempty"`
	MgmtOnly              *bool                                `json:"mgmt_only,omitempty"`
	Mode                  *WritableDeviceInterfaceModeModeEnum `json:"mode,omitempty"`
	Mtu                   *int64                               `json:"mtu,omitempty"`
	Name                  string                               `json:"name"`
	TaggedVlans           []int64                              `json:"tagged_vlans,omitempty"`
	Tags                  []string                             `json:"tags,omitempty"`
	Type                  WritableDeviceInterfaceTypeTypeEnum  `json:"type"`
	UntaggedVlan          *int64                               `json:"untagged_vlan,omitempty"`
}
