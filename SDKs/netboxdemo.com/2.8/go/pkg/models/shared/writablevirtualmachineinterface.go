package shared

type WritableVirtualMachineInterfaceModeModeEnum string

const (
	WritableVirtualMachineInterfaceModeModeEnumAccess    WritableVirtualMachineInterfaceModeModeEnum = "access"
	WritableVirtualMachineInterfaceModeModeEnumTagged    WritableVirtualMachineInterfaceModeModeEnum = "tagged"
	WritableVirtualMachineInterfaceModeModeEnumTaggedAll WritableVirtualMachineInterfaceModeModeEnum = "tagged-all"
)

type WritableVirtualMachineInterfaceTypeTypeEnum string

const (
	WritableVirtualMachineInterfaceTypeTypeEnumVirtual                          WritableVirtualMachineInterfaceTypeTypeEnum = "virtual"
	WritableVirtualMachineInterfaceTypeTypeEnumLag                              WritableVirtualMachineInterfaceTypeTypeEnum = "lag"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredbaseTx                 WritableVirtualMachineInterfaceTypeTypeEnum = "100base-tx"
	WritableVirtualMachineInterfaceTypeTypeEnumOneThousandbaseT                 WritableVirtualMachineInterfaceTypeTypeEnum = "1000base-t"
	WritableVirtualMachineInterfaceTypeTypeEnumTwo5gbaseT                       WritableVirtualMachineInterfaceTypeTypeEnum = "2.5gbase-t"
	WritableVirtualMachineInterfaceTypeTypeEnumFivegbaseT                       WritableVirtualMachineInterfaceTypeTypeEnum = "5gbase-t"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseT                        WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-t"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseCx4                      WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-cx4"
	WritableVirtualMachineInterfaceTypeTypeEnumOneThousandbaseXGbic             WritableVirtualMachineInterfaceTypeTypeEnum = "1000base-x-gbic"
	WritableVirtualMachineInterfaceTypeTypeEnumOneThousandbaseXSfp              WritableVirtualMachineInterfaceTypeTypeEnum = "1000base-x-sfp"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseXSfpp                    WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-x-sfpp"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseXXfp                     WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-x-xfp"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseXXenpak                  WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-x-xenpak"
	WritableVirtualMachineInterfaceTypeTypeEnumTengbaseXx2                      WritableVirtualMachineInterfaceTypeTypeEnum = "10gbase-x-x2"
	WritableVirtualMachineInterfaceTypeTypeEnumTwentyFivegbaseXSfp28            WritableVirtualMachineInterfaceTypeTypeEnum = "25gbase-x-sfp28"
	WritableVirtualMachineInterfaceTypeTypeEnumFortygbaseXQsfpp                 WritableVirtualMachineInterfaceTypeTypeEnum = "40gbase-x-qsfpp"
	WritableVirtualMachineInterfaceTypeTypeEnumFiftygbaseXSfp28                 WritableVirtualMachineInterfaceTypeTypeEnum = "50gbase-x-sfp28"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredgbaseXCfp              WritableVirtualMachineInterfaceTypeTypeEnum = "100gbase-x-cfp"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredgbaseXCfp2             WritableVirtualMachineInterfaceTypeTypeEnum = "100gbase-x-cfp2"
	WritableVirtualMachineInterfaceTypeTypeEnumTwoHundredgbaseXCfp2             WritableVirtualMachineInterfaceTypeTypeEnum = "200gbase-x-cfp2"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredgbaseXCfp4             WritableVirtualMachineInterfaceTypeTypeEnum = "100gbase-x-cfp4"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredgbaseXCpak             WritableVirtualMachineInterfaceTypeTypeEnum = "100gbase-x-cpak"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredgbaseXQsfp28           WritableVirtualMachineInterfaceTypeTypeEnum = "100gbase-x-qsfp28"
	WritableVirtualMachineInterfaceTypeTypeEnumTwoHundredgbaseXQsfp56           WritableVirtualMachineInterfaceTypeTypeEnum = "200gbase-x-qsfp56"
	WritableVirtualMachineInterfaceTypeTypeEnumFourHundredgbaseXQsfpdd          WritableVirtualMachineInterfaceTypeTypeEnum = "400gbase-x-qsfpdd"
	WritableVirtualMachineInterfaceTypeTypeEnumFourHundredgbaseXOsfp            WritableVirtualMachineInterfaceTypeTypeEnum = "400gbase-x-osfp"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211a                       WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11a"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211g                       WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11g"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211n                       WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11n"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211ac                      WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11ac"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211ad                      WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11ad"
	WritableVirtualMachineInterfaceTypeTypeEnumIeee80211ax                      WritableVirtualMachineInterfaceTypeTypeEnum = "ieee802.11ax"
	WritableVirtualMachineInterfaceTypeTypeEnumGsm                              WritableVirtualMachineInterfaceTypeTypeEnum = "gsm"
	WritableVirtualMachineInterfaceTypeTypeEnumCdma                             WritableVirtualMachineInterfaceTypeTypeEnum = "cdma"
	WritableVirtualMachineInterfaceTypeTypeEnumLte                              WritableVirtualMachineInterfaceTypeTypeEnum = "lte"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc3                         WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc3"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc12                        WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc12"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc48                        WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc48"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc192                       WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc192"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc768                       WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc768"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc1920                      WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc1920"
	WritableVirtualMachineInterfaceTypeTypeEnumSonetOc3840                      WritableVirtualMachineInterfaceTypeTypeEnum = "sonet-oc3840"
	WritableVirtualMachineInterfaceTypeTypeEnumOnegfcSfp                        WritableVirtualMachineInterfaceTypeTypeEnum = "1gfc-sfp"
	WritableVirtualMachineInterfaceTypeTypeEnumTwogfcSfp                        WritableVirtualMachineInterfaceTypeTypeEnum = "2gfc-sfp"
	WritableVirtualMachineInterfaceTypeTypeEnumFourgfcSfp                       WritableVirtualMachineInterfaceTypeTypeEnum = "4gfc-sfp"
	WritableVirtualMachineInterfaceTypeTypeEnumEightgfcSfpp                     WritableVirtualMachineInterfaceTypeTypeEnum = "8gfc-sfpp"
	WritableVirtualMachineInterfaceTypeTypeEnumSixteengfcSfpp                   WritableVirtualMachineInterfaceTypeTypeEnum = "16gfc-sfpp"
	WritableVirtualMachineInterfaceTypeTypeEnumThirtyTwogfcSfp28                WritableVirtualMachineInterfaceTypeTypeEnum = "32gfc-sfp28"
	WritableVirtualMachineInterfaceTypeTypeEnumOneHundredAndTwentyEightgfcSfp28 WritableVirtualMachineInterfaceTypeTypeEnum = "128gfc-sfp28"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandSdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-sdr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandDdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-ddr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandQdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-qdr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandFdr10                  WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-fdr10"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandFdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-fdr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandEdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-edr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandHdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-hdr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandNdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-ndr"
	WritableVirtualMachineInterfaceTypeTypeEnumInfinibandXdr                    WritableVirtualMachineInterfaceTypeTypeEnum = "infiniband-xdr"
	WritableVirtualMachineInterfaceTypeTypeEnumT1                               WritableVirtualMachineInterfaceTypeTypeEnum = "t1"
	WritableVirtualMachineInterfaceTypeTypeEnumE1                               WritableVirtualMachineInterfaceTypeTypeEnum = "e1"
	WritableVirtualMachineInterfaceTypeTypeEnumT3                               WritableVirtualMachineInterfaceTypeTypeEnum = "t3"
	WritableVirtualMachineInterfaceTypeTypeEnumE3                               WritableVirtualMachineInterfaceTypeTypeEnum = "e3"
	WritableVirtualMachineInterfaceTypeTypeEnumCiscoStackwise                   WritableVirtualMachineInterfaceTypeTypeEnum = "cisco-stackwise"
	WritableVirtualMachineInterfaceTypeTypeEnumCiscoStackwisePlus               WritableVirtualMachineInterfaceTypeTypeEnum = "cisco-stackwise-plus"
	WritableVirtualMachineInterfaceTypeTypeEnumCiscoFlexstack                   WritableVirtualMachineInterfaceTypeTypeEnum = "cisco-flexstack"
	WritableVirtualMachineInterfaceTypeTypeEnumCiscoFlexstackPlus               WritableVirtualMachineInterfaceTypeTypeEnum = "cisco-flexstack-plus"
	WritableVirtualMachineInterfaceTypeTypeEnumJuniperVcp                       WritableVirtualMachineInterfaceTypeTypeEnum = "juniper-vcp"
	WritableVirtualMachineInterfaceTypeTypeEnumExtremeSummitstack               WritableVirtualMachineInterfaceTypeTypeEnum = "extreme-summitstack"
	WritableVirtualMachineInterfaceTypeTypeEnumExtremeSummitstack128            WritableVirtualMachineInterfaceTypeTypeEnum = "extreme-summitstack-128"
	WritableVirtualMachineInterfaceTypeTypeEnumExtremeSummitstack256            WritableVirtualMachineInterfaceTypeTypeEnum = "extreme-summitstack-256"
	WritableVirtualMachineInterfaceTypeTypeEnumExtremeSummitstack512            WritableVirtualMachineInterfaceTypeTypeEnum = "extreme-summitstack-512"
	WritableVirtualMachineInterfaceTypeTypeEnumOther                            WritableVirtualMachineInterfaceTypeTypeEnum = "other"
)

type WritableVirtualMachineInterface struct {
	Description    *string                                      `json:"description,omitempty"`
	Enabled        *bool                                        `json:"enabled,omitempty"`
	ID             *int64                                       `json:"id,omitempty"`
	MacAddress     *string                                      `json:"mac_address,omitempty"`
	Mode           *WritableVirtualMachineInterfaceModeModeEnum `json:"mode,omitempty"`
	Mtu            *int64                                       `json:"mtu,omitempty"`
	Name           string                                       `json:"name"`
	TaggedVlans    []int64                                      `json:"tagged_vlans,omitempty"`
	Tags           []string                                     `json:"tags,omitempty"`
	Type           WritableVirtualMachineInterfaceTypeTypeEnum  `json:"type"`
	UntaggedVlan   *int64                                       `json:"untagged_vlan,omitempty"`
	VirtualMachine *int64                                       `json:"virtual_machine,omitempty"`
}
