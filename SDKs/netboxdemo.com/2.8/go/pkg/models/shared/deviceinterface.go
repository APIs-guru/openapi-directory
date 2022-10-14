package shared

type DeviceInterfaceConnectionStatusLabelEnum string

const (
	DeviceInterfaceConnectionStatusLabelEnumNotConnected DeviceInterfaceConnectionStatusLabelEnum = "Not Connected"
	DeviceInterfaceConnectionStatusLabelEnumConnected    DeviceInterfaceConnectionStatusLabelEnum = "Connected"
)

type DeviceInterfaceConnectionStatusConnectionStatus struct {
	Label DeviceInterfaceConnectionStatusLabelEnum `json:"label"`
	Value bool                                     `json:"value"`
}

type DeviceInterfaceModeLabelEnum string

const (
	DeviceInterfaceModeLabelEnumAccess    DeviceInterfaceModeLabelEnum = "Access"
	DeviceInterfaceModeLabelEnumTagged    DeviceInterfaceModeLabelEnum = "Tagged"
	DeviceInterfaceModeLabelEnumTaggedAll DeviceInterfaceModeLabelEnum = "Tagged (All)"
)

type DeviceInterfaceModeValueEnum string

const (
	DeviceInterfaceModeValueEnumAccess    DeviceInterfaceModeValueEnum = "access"
	DeviceInterfaceModeValueEnumTagged    DeviceInterfaceModeValueEnum = "tagged"
	DeviceInterfaceModeValueEnumTaggedAll DeviceInterfaceModeValueEnum = "tagged-all"
)

type DeviceInterfaceModeMode struct {
	Label DeviceInterfaceModeLabelEnum `json:"label"`
	Value DeviceInterfaceModeValueEnum `json:"value"`
}

type DeviceInterfaceTypeLabelEnum string

const (
	DeviceInterfaceTypeLabelEnumVirtual                 DeviceInterfaceTypeLabelEnum = "Virtual"
	DeviceInterfaceTypeLabelEnumLinkAggregationGroupLag DeviceInterfaceTypeLabelEnum = "Link Aggregation Group (LAG)"
	DeviceInterfaceTypeLabelEnumOneHundredBaseTx10100Me DeviceInterfaceTypeLabelEnum = "100BASE-TX (10/100ME)"
	DeviceInterfaceTypeLabelEnumOneThousandBaseT1Ge     DeviceInterfaceTypeLabelEnum = "1000BASE-T (1GE)"
	DeviceInterfaceTypeLabelEnumTwo5GbaseT25Ge          DeviceInterfaceTypeLabelEnum = "2.5GBASE-T (2.5GE)"
	DeviceInterfaceTypeLabelEnumFiveGbaseT5Ge           DeviceInterfaceTypeLabelEnum = "5GBASE-T (5GE)"
	DeviceInterfaceTypeLabelEnumTenGbaseT10Ge           DeviceInterfaceTypeLabelEnum = "10GBASE-T (10GE)"
	DeviceInterfaceTypeLabelEnumTenGbaseCx410Ge         DeviceInterfaceTypeLabelEnum = "10GBASE-CX4 (10GE)"
	DeviceInterfaceTypeLabelEnumGbic1Ge                 DeviceInterfaceTypeLabelEnum = "GBIC (1GE)"
	DeviceInterfaceTypeLabelEnumSfp1Ge                  DeviceInterfaceTypeLabelEnum = "SFP (1GE)"
	DeviceInterfaceTypeLabelEnumSfpPlus10Ge             DeviceInterfaceTypeLabelEnum = "SFP+ (10GE)"
	DeviceInterfaceTypeLabelEnumXfp10Ge                 DeviceInterfaceTypeLabelEnum = "XFP (10GE)"
	DeviceInterfaceTypeLabelEnumXenpak10Ge              DeviceInterfaceTypeLabelEnum = "XENPAK (10GE)"
	DeviceInterfaceTypeLabelEnumX210Ge                  DeviceInterfaceTypeLabelEnum = "X2 (10GE)"
	DeviceInterfaceTypeLabelEnumSfp2825Ge               DeviceInterfaceTypeLabelEnum = "SFP28 (25GE)"
	DeviceInterfaceTypeLabelEnumQsfpPlus40Ge            DeviceInterfaceTypeLabelEnum = "QSFP+ (40GE)"
	DeviceInterfaceTypeLabelEnumQsfp2850Ge              DeviceInterfaceTypeLabelEnum = "QSFP28 (50GE)"
	DeviceInterfaceTypeLabelEnumCfp100Ge                DeviceInterfaceTypeLabelEnum = "CFP (100GE)"
	DeviceInterfaceTypeLabelEnumCfp2100Ge               DeviceInterfaceTypeLabelEnum = "CFP2 (100GE)"
	DeviceInterfaceTypeLabelEnumCfp2200Ge               DeviceInterfaceTypeLabelEnum = "CFP2 (200GE)"
	DeviceInterfaceTypeLabelEnumCfp4100Ge               DeviceInterfaceTypeLabelEnum = "CFP4 (100GE)"
	DeviceInterfaceTypeLabelEnumCiscoCpak100Ge          DeviceInterfaceTypeLabelEnum = "Cisco CPAK (100GE)"
	DeviceInterfaceTypeLabelEnumQsfp28100Ge             DeviceInterfaceTypeLabelEnum = "QSFP28 (100GE)"
	DeviceInterfaceTypeLabelEnumQsfp56200Ge             DeviceInterfaceTypeLabelEnum = "QSFP56 (200GE)"
	DeviceInterfaceTypeLabelEnumQsfpDd400Ge             DeviceInterfaceTypeLabelEnum = "QSFP-DD (400GE)"
	DeviceInterfaceTypeLabelEnumOsfp400Ge               DeviceInterfaceTypeLabelEnum = "OSFP (400GE)"
	DeviceInterfaceTypeLabelEnumIeee80211a              DeviceInterfaceTypeLabelEnum = "IEEE 802.11a"
	DeviceInterfaceTypeLabelEnumIeee80211bG             DeviceInterfaceTypeLabelEnum = "IEEE 802.11b/g"
	DeviceInterfaceTypeLabelEnumIeee80211n              DeviceInterfaceTypeLabelEnum = "IEEE 802.11n"
	DeviceInterfaceTypeLabelEnumIeee80211ac             DeviceInterfaceTypeLabelEnum = "IEEE 802.11ac"
	DeviceInterfaceTypeLabelEnumIeee80211ad             DeviceInterfaceTypeLabelEnum = "IEEE 802.11ad"
	DeviceInterfaceTypeLabelEnumIeee80211ax             DeviceInterfaceTypeLabelEnum = "IEEE 802.11ax"
	DeviceInterfaceTypeLabelEnumGsm                     DeviceInterfaceTypeLabelEnum = "GSM"
	DeviceInterfaceTypeLabelEnumCdma                    DeviceInterfaceTypeLabelEnum = "CDMA"
	DeviceInterfaceTypeLabelEnumLte                     DeviceInterfaceTypeLabelEnum = "LTE"
	DeviceInterfaceTypeLabelEnumOc3Stm1                 DeviceInterfaceTypeLabelEnum = "OC-3/STM-1"
	DeviceInterfaceTypeLabelEnumOc12Stm4                DeviceInterfaceTypeLabelEnum = "OC-12/STM-4"
	DeviceInterfaceTypeLabelEnumOc48Stm16               DeviceInterfaceTypeLabelEnum = "OC-48/STM-16"
	DeviceInterfaceTypeLabelEnumOc192Stm64              DeviceInterfaceTypeLabelEnum = "OC-192/STM-64"
	DeviceInterfaceTypeLabelEnumOc768Stm256             DeviceInterfaceTypeLabelEnum = "OC-768/STM-256"
	DeviceInterfaceTypeLabelEnumOc1920Stm640            DeviceInterfaceTypeLabelEnum = "OC-1920/STM-640"
	DeviceInterfaceTypeLabelEnumOc3840Stm1234           DeviceInterfaceTypeLabelEnum = "OC-3840/STM-1234"
	DeviceInterfaceTypeLabelEnumSfp1Gfc                 DeviceInterfaceTypeLabelEnum = "SFP (1GFC)"
	DeviceInterfaceTypeLabelEnumSfp2Gfc                 DeviceInterfaceTypeLabelEnum = "SFP (2GFC)"
	DeviceInterfaceTypeLabelEnumSfp4Gfc                 DeviceInterfaceTypeLabelEnum = "SFP (4GFC)"
	DeviceInterfaceTypeLabelEnumSfpPlus8Gfc             DeviceInterfaceTypeLabelEnum = "SFP+ (8GFC)"
	DeviceInterfaceTypeLabelEnumSfpPlus16Gfc            DeviceInterfaceTypeLabelEnum = "SFP+ (16GFC)"
	DeviceInterfaceTypeLabelEnumSfp2832Gfc              DeviceInterfaceTypeLabelEnum = "SFP28 (32GFC)"
	DeviceInterfaceTypeLabelEnumQsfp28128Gfc            DeviceInterfaceTypeLabelEnum = "QSFP28 (128GFC)"
	DeviceInterfaceTypeLabelEnumSdr2Gbps                DeviceInterfaceTypeLabelEnum = "SDR (2 Gbps)"
	DeviceInterfaceTypeLabelEnumDdr4Gbps                DeviceInterfaceTypeLabelEnum = "DDR (4 Gbps)"
	DeviceInterfaceTypeLabelEnumQdr8Gbps                DeviceInterfaceTypeLabelEnum = "QDR (8 Gbps)"
	DeviceInterfaceTypeLabelEnumFdr1010Gbps             DeviceInterfaceTypeLabelEnum = "FDR10 (10 Gbps)"
	DeviceInterfaceTypeLabelEnumFdr135Gbps              DeviceInterfaceTypeLabelEnum = "FDR (13.5 Gbps)"
	DeviceInterfaceTypeLabelEnumEdr25Gbps               DeviceInterfaceTypeLabelEnum = "EDR (25 Gbps)"
	DeviceInterfaceTypeLabelEnumHdr50Gbps               DeviceInterfaceTypeLabelEnum = "HDR (50 Gbps)"
	DeviceInterfaceTypeLabelEnumNdr100Gbps              DeviceInterfaceTypeLabelEnum = "NDR (100 Gbps)"
	DeviceInterfaceTypeLabelEnumXdr250Gbps              DeviceInterfaceTypeLabelEnum = "XDR (250 Gbps)"
	DeviceInterfaceTypeLabelEnumT11544Mbps              DeviceInterfaceTypeLabelEnum = "T1 (1.544 Mbps)"
	DeviceInterfaceTypeLabelEnumE12048Mbps              DeviceInterfaceTypeLabelEnum = "E1 (2.048 Mbps)"
	DeviceInterfaceTypeLabelEnumT345Mbps                DeviceInterfaceTypeLabelEnum = "T3 (45 Mbps)"
	DeviceInterfaceTypeLabelEnumE334Mbps                DeviceInterfaceTypeLabelEnum = "E3 (34 Mbps)"
	DeviceInterfaceTypeLabelEnumCiscoStackWise          DeviceInterfaceTypeLabelEnum = "Cisco StackWise"
	DeviceInterfaceTypeLabelEnumCiscoStackWisePlus      DeviceInterfaceTypeLabelEnum = "Cisco StackWise Plus"
	DeviceInterfaceTypeLabelEnumCiscoFlexStack          DeviceInterfaceTypeLabelEnum = "Cisco FlexStack"
	DeviceInterfaceTypeLabelEnumCiscoFlexStackPlus      DeviceInterfaceTypeLabelEnum = "Cisco FlexStack Plus"
	DeviceInterfaceTypeLabelEnumJuniperVcp              DeviceInterfaceTypeLabelEnum = "Juniper VCP"
	DeviceInterfaceTypeLabelEnumExtremeSummitStack      DeviceInterfaceTypeLabelEnum = "Extreme SummitStack"
	DeviceInterfaceTypeLabelEnumExtremeSummitStack128   DeviceInterfaceTypeLabelEnum = "Extreme SummitStack-128"
	DeviceInterfaceTypeLabelEnumExtremeSummitStack256   DeviceInterfaceTypeLabelEnum = "Extreme SummitStack-256"
	DeviceInterfaceTypeLabelEnumExtremeSummitStack512   DeviceInterfaceTypeLabelEnum = "Extreme SummitStack-512"
	DeviceInterfaceTypeLabelEnumOther                   DeviceInterfaceTypeLabelEnum = "Other"
)

type DeviceInterfaceTypeValueEnum string

const (
	DeviceInterfaceTypeValueEnumVirtual                          DeviceInterfaceTypeValueEnum = "virtual"
	DeviceInterfaceTypeValueEnumLag                              DeviceInterfaceTypeValueEnum = "lag"
	DeviceInterfaceTypeValueEnumOneHundredbaseTx                 DeviceInterfaceTypeValueEnum = "100base-tx"
	DeviceInterfaceTypeValueEnumOneThousandbaseT                 DeviceInterfaceTypeValueEnum = "1000base-t"
	DeviceInterfaceTypeValueEnumTwo5gbaseT                       DeviceInterfaceTypeValueEnum = "2.5gbase-t"
	DeviceInterfaceTypeValueEnumFivegbaseT                       DeviceInterfaceTypeValueEnum = "5gbase-t"
	DeviceInterfaceTypeValueEnumTengbaseT                        DeviceInterfaceTypeValueEnum = "10gbase-t"
	DeviceInterfaceTypeValueEnumTengbaseCx4                      DeviceInterfaceTypeValueEnum = "10gbase-cx4"
	DeviceInterfaceTypeValueEnumOneThousandbaseXGbic             DeviceInterfaceTypeValueEnum = "1000base-x-gbic"
	DeviceInterfaceTypeValueEnumOneThousandbaseXSfp              DeviceInterfaceTypeValueEnum = "1000base-x-sfp"
	DeviceInterfaceTypeValueEnumTengbaseXSfpp                    DeviceInterfaceTypeValueEnum = "10gbase-x-sfpp"
	DeviceInterfaceTypeValueEnumTengbaseXXfp                     DeviceInterfaceTypeValueEnum = "10gbase-x-xfp"
	DeviceInterfaceTypeValueEnumTengbaseXXenpak                  DeviceInterfaceTypeValueEnum = "10gbase-x-xenpak"
	DeviceInterfaceTypeValueEnumTengbaseXx2                      DeviceInterfaceTypeValueEnum = "10gbase-x-x2"
	DeviceInterfaceTypeValueEnumTwentyFivegbaseXSfp28            DeviceInterfaceTypeValueEnum = "25gbase-x-sfp28"
	DeviceInterfaceTypeValueEnumFortygbaseXQsfpp                 DeviceInterfaceTypeValueEnum = "40gbase-x-qsfpp"
	DeviceInterfaceTypeValueEnumFiftygbaseXSfp28                 DeviceInterfaceTypeValueEnum = "50gbase-x-sfp28"
	DeviceInterfaceTypeValueEnumOneHundredgbaseXCfp              DeviceInterfaceTypeValueEnum = "100gbase-x-cfp"
	DeviceInterfaceTypeValueEnumOneHundredgbaseXCfp2             DeviceInterfaceTypeValueEnum = "100gbase-x-cfp2"
	DeviceInterfaceTypeValueEnumTwoHundredgbaseXCfp2             DeviceInterfaceTypeValueEnum = "200gbase-x-cfp2"
	DeviceInterfaceTypeValueEnumOneHundredgbaseXCfp4             DeviceInterfaceTypeValueEnum = "100gbase-x-cfp4"
	DeviceInterfaceTypeValueEnumOneHundredgbaseXCpak             DeviceInterfaceTypeValueEnum = "100gbase-x-cpak"
	DeviceInterfaceTypeValueEnumOneHundredgbaseXQsfp28           DeviceInterfaceTypeValueEnum = "100gbase-x-qsfp28"
	DeviceInterfaceTypeValueEnumTwoHundredgbaseXQsfp56           DeviceInterfaceTypeValueEnum = "200gbase-x-qsfp56"
	DeviceInterfaceTypeValueEnumFourHundredgbaseXQsfpdd          DeviceInterfaceTypeValueEnum = "400gbase-x-qsfpdd"
	DeviceInterfaceTypeValueEnumFourHundredgbaseXOsfp            DeviceInterfaceTypeValueEnum = "400gbase-x-osfp"
	DeviceInterfaceTypeValueEnumIeee80211a                       DeviceInterfaceTypeValueEnum = "ieee802.11a"
	DeviceInterfaceTypeValueEnumIeee80211g                       DeviceInterfaceTypeValueEnum = "ieee802.11g"
	DeviceInterfaceTypeValueEnumIeee80211n                       DeviceInterfaceTypeValueEnum = "ieee802.11n"
	DeviceInterfaceTypeValueEnumIeee80211ac                      DeviceInterfaceTypeValueEnum = "ieee802.11ac"
	DeviceInterfaceTypeValueEnumIeee80211ad                      DeviceInterfaceTypeValueEnum = "ieee802.11ad"
	DeviceInterfaceTypeValueEnumIeee80211ax                      DeviceInterfaceTypeValueEnum = "ieee802.11ax"
	DeviceInterfaceTypeValueEnumGsm                              DeviceInterfaceTypeValueEnum = "gsm"
	DeviceInterfaceTypeValueEnumCdma                             DeviceInterfaceTypeValueEnum = "cdma"
	DeviceInterfaceTypeValueEnumLte                              DeviceInterfaceTypeValueEnum = "lte"
	DeviceInterfaceTypeValueEnumSonetOc3                         DeviceInterfaceTypeValueEnum = "sonet-oc3"
	DeviceInterfaceTypeValueEnumSonetOc12                        DeviceInterfaceTypeValueEnum = "sonet-oc12"
	DeviceInterfaceTypeValueEnumSonetOc48                        DeviceInterfaceTypeValueEnum = "sonet-oc48"
	DeviceInterfaceTypeValueEnumSonetOc192                       DeviceInterfaceTypeValueEnum = "sonet-oc192"
	DeviceInterfaceTypeValueEnumSonetOc768                       DeviceInterfaceTypeValueEnum = "sonet-oc768"
	DeviceInterfaceTypeValueEnumSonetOc1920                      DeviceInterfaceTypeValueEnum = "sonet-oc1920"
	DeviceInterfaceTypeValueEnumSonetOc3840                      DeviceInterfaceTypeValueEnum = "sonet-oc3840"
	DeviceInterfaceTypeValueEnumOnegfcSfp                        DeviceInterfaceTypeValueEnum = "1gfc-sfp"
	DeviceInterfaceTypeValueEnumTwogfcSfp                        DeviceInterfaceTypeValueEnum = "2gfc-sfp"
	DeviceInterfaceTypeValueEnumFourgfcSfp                       DeviceInterfaceTypeValueEnum = "4gfc-sfp"
	DeviceInterfaceTypeValueEnumEightgfcSfpp                     DeviceInterfaceTypeValueEnum = "8gfc-sfpp"
	DeviceInterfaceTypeValueEnumSixteengfcSfpp                   DeviceInterfaceTypeValueEnum = "16gfc-sfpp"
	DeviceInterfaceTypeValueEnumThirtyTwogfcSfp28                DeviceInterfaceTypeValueEnum = "32gfc-sfp28"
	DeviceInterfaceTypeValueEnumOneHundredAndTwentyEightgfcSfp28 DeviceInterfaceTypeValueEnum = "128gfc-sfp28"
	DeviceInterfaceTypeValueEnumInfinibandSdr                    DeviceInterfaceTypeValueEnum = "infiniband-sdr"
	DeviceInterfaceTypeValueEnumInfinibandDdr                    DeviceInterfaceTypeValueEnum = "infiniband-ddr"
	DeviceInterfaceTypeValueEnumInfinibandQdr                    DeviceInterfaceTypeValueEnum = "infiniband-qdr"
	DeviceInterfaceTypeValueEnumInfinibandFdr10                  DeviceInterfaceTypeValueEnum = "infiniband-fdr10"
	DeviceInterfaceTypeValueEnumInfinibandFdr                    DeviceInterfaceTypeValueEnum = "infiniband-fdr"
	DeviceInterfaceTypeValueEnumInfinibandEdr                    DeviceInterfaceTypeValueEnum = "infiniband-edr"
	DeviceInterfaceTypeValueEnumInfinibandHdr                    DeviceInterfaceTypeValueEnum = "infiniband-hdr"
	DeviceInterfaceTypeValueEnumInfinibandNdr                    DeviceInterfaceTypeValueEnum = "infiniband-ndr"
	DeviceInterfaceTypeValueEnumInfinibandXdr                    DeviceInterfaceTypeValueEnum = "infiniband-xdr"
	DeviceInterfaceTypeValueEnumT1                               DeviceInterfaceTypeValueEnum = "t1"
	DeviceInterfaceTypeValueEnumE1                               DeviceInterfaceTypeValueEnum = "e1"
	DeviceInterfaceTypeValueEnumT3                               DeviceInterfaceTypeValueEnum = "t3"
	DeviceInterfaceTypeValueEnumE3                               DeviceInterfaceTypeValueEnum = "e3"
	DeviceInterfaceTypeValueEnumCiscoStackwise                   DeviceInterfaceTypeValueEnum = "cisco-stackwise"
	DeviceInterfaceTypeValueEnumCiscoStackwisePlus               DeviceInterfaceTypeValueEnum = "cisco-stackwise-plus"
	DeviceInterfaceTypeValueEnumCiscoFlexstack                   DeviceInterfaceTypeValueEnum = "cisco-flexstack"
	DeviceInterfaceTypeValueEnumCiscoFlexstackPlus               DeviceInterfaceTypeValueEnum = "cisco-flexstack-plus"
	DeviceInterfaceTypeValueEnumJuniperVcp                       DeviceInterfaceTypeValueEnum = "juniper-vcp"
	DeviceInterfaceTypeValueEnumExtremeSummitstack               DeviceInterfaceTypeValueEnum = "extreme-summitstack"
	DeviceInterfaceTypeValueEnumExtremeSummitstack128            DeviceInterfaceTypeValueEnum = "extreme-summitstack-128"
	DeviceInterfaceTypeValueEnumExtremeSummitstack256            DeviceInterfaceTypeValueEnum = "extreme-summitstack-256"
	DeviceInterfaceTypeValueEnumExtremeSummitstack512            DeviceInterfaceTypeValueEnum = "extreme-summitstack-512"
	DeviceInterfaceTypeValueEnumOther                            DeviceInterfaceTypeValueEnum = "other"
)

type DeviceInterfaceTypeType struct {
	Label DeviceInterfaceTypeLabelEnum `json:"label"`
	Value DeviceInterfaceTypeValueEnum `json:"value"`
}

type DeviceInterface struct {
	Cable                 *NestedCable                                     `json:"cable,omitempty"`
	ConnectedEndpoint     map[string]string                                `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                                          `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *DeviceInterfaceConnectionStatusConnectionStatus `json:"connection_status,omitempty"`
	CountIpaddresses      *int64                                           `json:"count_ipaddresses,omitempty"`
	Description           *string                                          `json:"description,omitempty"`
	Device                NestedDevice                                     `json:"device"`
	Enabled               *bool                                            `json:"enabled,omitempty"`
	ID                    *int64                                           `json:"id,omitempty"`
	Lag                   *NestedInterface                                 `json:"lag,omitempty"`
	MacAddress            *string                                          `json:"mac_address,omitempty"`
	MgmtOnly              *bool                                            `json:"mgmt_only,omitempty"`
	Mode                  *DeviceInterfaceModeMode                         `json:"mode,omitempty"`
	Mtu                   *int64                                           `json:"mtu,omitempty"`
	Name                  string                                           `json:"name"`
	TaggedVlans           []NestedVlan                                     `json:"tagged_vlans,omitempty"`
	Tags                  []string                                         `json:"tags,omitempty"`
	Type                  DeviceInterfaceTypeType                          `json:"type"`
	UntaggedVlan          *NestedVlan                                      `json:"untagged_vlan,omitempty"`
}
