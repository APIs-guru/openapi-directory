package shared

type LinodeConfigInterfacePurposeEnum string

const (
	LinodeConfigInterfacePurposeEnumPublic LinodeConfigInterfacePurposeEnum = "public"
	LinodeConfigInterfacePurposeEnumVlan   LinodeConfigInterfacePurposeEnum = "vlan"
)

type LinodeConfigInterface struct {
	IpamAddress *string                           `json:"ipam_address,omitempty"`
	Label       *string                           `json:"label,omitempty"`
	Purpose     *LinodeConfigInterfacePurposeEnum `json:"purpose,omitempty"`
}
