package shared

type LinodeConfigInterfacePurposeEnum string

const (
	LinodeConfigInterfacePurposeEnumPublic LinodeConfigInterfacePurposeEnum = "public"
	LinodeConfigInterfacePurposeEnumVlan   LinodeConfigInterfacePurposeEnum = "vlan"
)

// LinodeConfigInterface
// The Network Interface to apply to this Linode's configuration profile.
type LinodeConfigInterface struct {
	IpamAddress *string                           `json:"ipam_address,omitempty"`
	Label       *string                           `json:"label,omitempty"`
	Purpose     *LinodeConfigInterfacePurposeEnum `json:"purpose,omitempty"`
}
