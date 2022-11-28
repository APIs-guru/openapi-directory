package shared

type DomainMappingSpecCertificateModeEnum string

const (
	DomainMappingSpecCertificateModeEnumCertificateModeUnspecified DomainMappingSpecCertificateModeEnum = "CERTIFICATE_MODE_UNSPECIFIED"
	DomainMappingSpecCertificateModeEnumNone                       DomainMappingSpecCertificateModeEnum = "NONE"
	DomainMappingSpecCertificateModeEnumAutomatic                  DomainMappingSpecCertificateModeEnum = "AUTOMATIC"
)

// DomainMappingSpec
// The desired state of the Domain Mapping.
type DomainMappingSpec struct {
	CertificateMode *DomainMappingSpecCertificateModeEnum `json:"certificateMode,omitempty"`
	ForceOverride   *bool                                 `json:"forceOverride,omitempty"`
	RouteName       *string                               `json:"routeName,omitempty"`
}
