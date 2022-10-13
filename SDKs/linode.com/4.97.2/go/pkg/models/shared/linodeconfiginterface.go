package shared

type LinodeConfigInterfacePurposeEnum string

const (
	LinodeConfigInterfacePurposeEnumPublic LinodeConfigInterfacePurposeEnum = "public"
	LinodeConfigInterfacePurposeEnumVlan   LinodeConfigInterfacePurposeEnum = "vlan"
)

type LinodeConfigInterface struct {
	IpamAddress *string                           `json:"ipam_address"`
	Label       *string                           `json:"label"`
	Purpose     *LinodeConfigInterfacePurposeEnum `json:"purpose"`
}
