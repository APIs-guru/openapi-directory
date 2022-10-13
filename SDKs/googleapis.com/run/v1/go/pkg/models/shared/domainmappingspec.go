package shared

type DomainMappingSpecCertificateModeEnum string

const (
	DomainMappingSpecCertificateModeEnumCertificateModeUnspecified DomainMappingSpecCertificateModeEnum = "CERTIFICATE_MODE_UNSPECIFIED"
	DomainMappingSpecCertificateModeEnumNone                       DomainMappingSpecCertificateModeEnum = "NONE"
	DomainMappingSpecCertificateModeEnumAutomatic                  DomainMappingSpecCertificateModeEnum = "AUTOMATIC"
)

type DomainMappingSpec struct {
	CertificateMode *DomainMappingSpecCertificateModeEnum `json:"certificateMode"`
	ForceOverride   *bool                                 `json:"forceOverride"`
	RouteName       *string                               `json:"routeName"`
}
