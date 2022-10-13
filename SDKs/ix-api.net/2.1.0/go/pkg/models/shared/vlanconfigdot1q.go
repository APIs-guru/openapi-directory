package shared

type VLanConfigDot1QVlanEthertypeEnum string

const (
	VLanConfigDot1QVlanEthertypeEnumZerox8100 VLanConfigDot1QVlanEthertypeEnum = "0x8100"
	VLanConfigDot1QVlanEthertypeEnumZerox88a8 VLanConfigDot1QVlanEthertypeEnum = "0x88a8"
	VLanConfigDot1QVlanEthertypeEnumZerox9100 VLanConfigDot1QVlanEthertypeEnum = "0x9100"
)

type VLanConfigDot1Q struct {
	Vlan          int32                             `json:"vlan"`
	VlanEthertype *VLanConfigDot1QVlanEthertypeEnum `json:"vlan_ethertype"`
	VlanType      string                            `json:"vlan_type"`
}
