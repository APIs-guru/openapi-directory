package shared

type VLanConfigQinQOuterVlanEthertypeEnum string

const (
	VLanConfigQinQOuterVlanEthertypeEnumZerox8100 VLanConfigQinQOuterVlanEthertypeEnum = "0x8100"
	VLanConfigQinQOuterVlanEthertypeEnumZerox88a8 VLanConfigQinQOuterVlanEthertypeEnum = "0x88a8"
	VLanConfigQinQOuterVlanEthertypeEnumZerox9100 VLanConfigQinQOuterVlanEthertypeEnum = "0x9100"
)

type VLanConfigQinQ struct {
	InnerVlan          int32                                 `json:"inner_vlan"`
	OuterVlan          int32                                 `json:"outer_vlan"`
	OuterVlanEthertype *VLanConfigQinQOuterVlanEthertypeEnum `json:"outer_vlan_ethertype"`
	VlanType           string                                `json:"vlan_type"`
}
