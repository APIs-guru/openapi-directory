package shared




type WritableDeviceInterfaceModeEnum string

const (
    WritableDeviceInterfaceModeEnumAccess WritableDeviceInterfaceModeEnum = "access"
WritableDeviceInterfaceModeEnumTagged WritableDeviceInterfaceModeEnum = "tagged"
WritableDeviceInterfaceModeEnumTaggedAll WritableDeviceInterfaceModeEnum = "tagged-all"
)



type WritableDeviceInterfaceTypeEnum string

const (
    WritableDeviceInterfaceTypeEnumVirtual WritableDeviceInterfaceTypeEnum = "virtual"
WritableDeviceInterfaceTypeEnumLag WritableDeviceInterfaceTypeEnum = "lag"
WritableDeviceInterfaceTypeEnumOneHundredbaseTx WritableDeviceInterfaceTypeEnum = "100base-tx"
WritableDeviceInterfaceTypeEnumOneThousandbaseT WritableDeviceInterfaceTypeEnum = "1000base-t"
WritableDeviceInterfaceTypeEnumTwo5gbaseT WritableDeviceInterfaceTypeEnum = "2.5gbase-t"
WritableDeviceInterfaceTypeEnumFivegbaseT WritableDeviceInterfaceTypeEnum = "5gbase-t"
WritableDeviceInterfaceTypeEnumTengbaseT WritableDeviceInterfaceTypeEnum = "10gbase-t"
WritableDeviceInterfaceTypeEnumTengbaseCx4 WritableDeviceInterfaceTypeEnum = "10gbase-cx4"
WritableDeviceInterfaceTypeEnumOneThousandbaseXGbic WritableDeviceInterfaceTypeEnum = "1000base-x-gbic"
WritableDeviceInterfaceTypeEnumOneThousandbaseXSfp WritableDeviceInterfaceTypeEnum = "1000base-x-sfp"
WritableDeviceInterfaceTypeEnumTengbaseXSfpp WritableDeviceInterfaceTypeEnum = "10gbase-x-sfpp"
WritableDeviceInterfaceTypeEnumTengbaseXXfp WritableDeviceInterfaceTypeEnum = "10gbase-x-xfp"
WritableDeviceInterfaceTypeEnumTengbaseXXenpak WritableDeviceInterfaceTypeEnum = "10gbase-x-xenpak"
WritableDeviceInterfaceTypeEnumTengbaseXx2 WritableDeviceInterfaceTypeEnum = "10gbase-x-x2"
WritableDeviceInterfaceTypeEnumTwentyFivegbaseXSfp28 WritableDeviceInterfaceTypeEnum = "25gbase-x-sfp28"
WritableDeviceInterfaceTypeEnumFortygbaseXQsfpp WritableDeviceInterfaceTypeEnum = "40gbase-x-qsfpp"
WritableDeviceInterfaceTypeEnumFiftygbaseXSfp28 WritableDeviceInterfaceTypeEnum = "50gbase-x-sfp28"
WritableDeviceInterfaceTypeEnumOneHundredgbaseXCfp WritableDeviceInterfaceTypeEnum = "100gbase-x-cfp"
WritableDeviceInterfaceTypeEnumOneHundredgbaseXCfp2 WritableDeviceInterfaceTypeEnum = "100gbase-x-cfp2"
WritableDeviceInterfaceTypeEnumTwoHundredgbaseXCfp2 WritableDeviceInterfaceTypeEnum = "200gbase-x-cfp2"
WritableDeviceInterfaceTypeEnumOneHundredgbaseXCfp4 WritableDeviceInterfaceTypeEnum = "100gbase-x-cfp4"
WritableDeviceInterfaceTypeEnumOneHundredgbaseXCpak WritableDeviceInterfaceTypeEnum = "100gbase-x-cpak"
WritableDeviceInterfaceTypeEnumOneHundredgbaseXQsfp28 WritableDeviceInterfaceTypeEnum = "100gbase-x-qsfp28"
WritableDeviceInterfaceTypeEnumTwoHundredgbaseXQsfp56 WritableDeviceInterfaceTypeEnum = "200gbase-x-qsfp56"
WritableDeviceInterfaceTypeEnumFourHundredgbaseXQsfpdd WritableDeviceInterfaceTypeEnum = "400gbase-x-qsfpdd"
WritableDeviceInterfaceTypeEnumFourHundredgbaseXOsfp WritableDeviceInterfaceTypeEnum = "400gbase-x-osfp"
WritableDeviceInterfaceTypeEnumIeee80211a WritableDeviceInterfaceTypeEnum = "ieee802.11a"
WritableDeviceInterfaceTypeEnumIeee80211g WritableDeviceInterfaceTypeEnum = "ieee802.11g"
WritableDeviceInterfaceTypeEnumIeee80211n WritableDeviceInterfaceTypeEnum = "ieee802.11n"
WritableDeviceInterfaceTypeEnumIeee80211ac WritableDeviceInterfaceTypeEnum = "ieee802.11ac"
WritableDeviceInterfaceTypeEnumIeee80211ad WritableDeviceInterfaceTypeEnum = "ieee802.11ad"
WritableDeviceInterfaceTypeEnumIeee80211ax WritableDeviceInterfaceTypeEnum = "ieee802.11ax"
WritableDeviceInterfaceTypeEnumGsm WritableDeviceInterfaceTypeEnum = "gsm"
WritableDeviceInterfaceTypeEnumCdma WritableDeviceInterfaceTypeEnum = "cdma"
WritableDeviceInterfaceTypeEnumLte WritableDeviceInterfaceTypeEnum = "lte"
WritableDeviceInterfaceTypeEnumSonetOc3 WritableDeviceInterfaceTypeEnum = "sonet-oc3"
WritableDeviceInterfaceTypeEnumSonetOc12 WritableDeviceInterfaceTypeEnum = "sonet-oc12"
WritableDeviceInterfaceTypeEnumSonetOc48 WritableDeviceInterfaceTypeEnum = "sonet-oc48"
WritableDeviceInterfaceTypeEnumSonetOc192 WritableDeviceInterfaceTypeEnum = "sonet-oc192"
WritableDeviceInterfaceTypeEnumSonetOc768 WritableDeviceInterfaceTypeEnum = "sonet-oc768"
WritableDeviceInterfaceTypeEnumSonetOc1920 WritableDeviceInterfaceTypeEnum = "sonet-oc1920"
WritableDeviceInterfaceTypeEnumSonetOc3840 WritableDeviceInterfaceTypeEnum = "sonet-oc3840"
WritableDeviceInterfaceTypeEnumOnegfcSfp WritableDeviceInterfaceTypeEnum = "1gfc-sfp"
WritableDeviceInterfaceTypeEnumTwogfcSfp WritableDeviceInterfaceTypeEnum = "2gfc-sfp"
WritableDeviceInterfaceTypeEnumFourgfcSfp WritableDeviceInterfaceTypeEnum = "4gfc-sfp"
WritableDeviceInterfaceTypeEnumEightgfcSfpp WritableDeviceInterfaceTypeEnum = "8gfc-sfpp"
WritableDeviceInterfaceTypeEnumSixteengfcSfpp WritableDeviceInterfaceTypeEnum = "16gfc-sfpp"
WritableDeviceInterfaceTypeEnumThirtyTwogfcSfp28 WritableDeviceInterfaceTypeEnum = "32gfc-sfp28"
WritableDeviceInterfaceTypeEnumOneHundredAndTwentyEightgfcSfp28 WritableDeviceInterfaceTypeEnum = "128gfc-sfp28"
WritableDeviceInterfaceTypeEnumInfinibandSdr WritableDeviceInterfaceTypeEnum = "infiniband-sdr"
WritableDeviceInterfaceTypeEnumInfinibandDdr WritableDeviceInterfaceTypeEnum = "infiniband-ddr"
WritableDeviceInterfaceTypeEnumInfinibandQdr WritableDeviceInterfaceTypeEnum = "infiniband-qdr"
WritableDeviceInterfaceTypeEnumInfinibandFdr10 WritableDeviceInterfaceTypeEnum = "infiniband-fdr10"
WritableDeviceInterfaceTypeEnumInfinibandFdr WritableDeviceInterfaceTypeEnum = "infiniband-fdr"
WritableDeviceInterfaceTypeEnumInfinibandEdr WritableDeviceInterfaceTypeEnum = "infiniband-edr"
WritableDeviceInterfaceTypeEnumInfinibandHdr WritableDeviceInterfaceTypeEnum = "infiniband-hdr"
WritableDeviceInterfaceTypeEnumInfinibandNdr WritableDeviceInterfaceTypeEnum = "infiniband-ndr"
WritableDeviceInterfaceTypeEnumInfinibandXdr WritableDeviceInterfaceTypeEnum = "infiniband-xdr"
WritableDeviceInterfaceTypeEnumT1 WritableDeviceInterfaceTypeEnum = "t1"
WritableDeviceInterfaceTypeEnumE1 WritableDeviceInterfaceTypeEnum = "e1"
WritableDeviceInterfaceTypeEnumT3 WritableDeviceInterfaceTypeEnum = "t3"
WritableDeviceInterfaceTypeEnumE3 WritableDeviceInterfaceTypeEnum = "e3"
WritableDeviceInterfaceTypeEnumCiscoStackwise WritableDeviceInterfaceTypeEnum = "cisco-stackwise"
WritableDeviceInterfaceTypeEnumCiscoStackwisePlus WritableDeviceInterfaceTypeEnum = "cisco-stackwise-plus"
WritableDeviceInterfaceTypeEnumCiscoFlexstack WritableDeviceInterfaceTypeEnum = "cisco-flexstack"
WritableDeviceInterfaceTypeEnumCiscoFlexstackPlus WritableDeviceInterfaceTypeEnum = "cisco-flexstack-plus"
WritableDeviceInterfaceTypeEnumJuniperVcp WritableDeviceInterfaceTypeEnum = "juniper-vcp"
WritableDeviceInterfaceTypeEnumExtremeSummitstack WritableDeviceInterfaceTypeEnum = "extreme-summitstack"
WritableDeviceInterfaceTypeEnumExtremeSummitstack128 WritableDeviceInterfaceTypeEnum = "extreme-summitstack-128"
WritableDeviceInterfaceTypeEnumExtremeSummitstack256 WritableDeviceInterfaceTypeEnum = "extreme-summitstack-256"
WritableDeviceInterfaceTypeEnumExtremeSummitstack512 WritableDeviceInterfaceTypeEnum = "extreme-summitstack-512"
WritableDeviceInterfaceTypeEnumOther WritableDeviceInterfaceTypeEnum = "other"
)


type WritableDeviceInterface struct {
    Cable *NestedCable `json:"cable,omitempty"`
    ConnectedEndpoint map[string]string `json:"connected_endpoint,omitempty"`
    ConnectedEndpointType *string `json:"connected_endpoint_type,omitempty"`
    ConnectionStatus *bool `json:"connection_status,omitempty"`
    CountIpaddresses *int64 `json:"count_ipaddresses,omitempty"`
    Description *string `json:"description,omitempty"`
    Device int64 `json:"device"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Lag *int64 `json:"lag,omitempty"`
    MacAddress *string `json:"mac_address,omitempty"`
    MgmtOnly *bool `json:"mgmt_only,omitempty"`
    Mode *WritableDeviceInterfaceModeEnum `json:"mode,omitempty"`
    Mtu *int64 `json:"mtu,omitempty"`
    Name string `json:"name"`
    TaggedVlans []int64 `json:"tagged_vlans,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type WritableDeviceInterfaceTypeEnum `json:"type"`
    UntaggedVlan *int64 `json:"untagged_vlan,omitempty"`
    
}

