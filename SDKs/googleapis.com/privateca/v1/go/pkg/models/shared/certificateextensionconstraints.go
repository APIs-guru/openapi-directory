package shared

type CertificateExtensionConstraintsKnownExtensionsEnum string

const (
	CertificateExtensionConstraintsKnownExtensionsEnumKnownCertificateExtensionUnspecified CertificateExtensionConstraintsKnownExtensionsEnum = "KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED"
	CertificateExtensionConstraintsKnownExtensionsEnumBaseKeyUsage                         CertificateExtensionConstraintsKnownExtensionsEnum = "BASE_KEY_USAGE"
	CertificateExtensionConstraintsKnownExtensionsEnumExtendedKeyUsage                     CertificateExtensionConstraintsKnownExtensionsEnum = "EXTENDED_KEY_USAGE"
	CertificateExtensionConstraintsKnownExtensionsEnumCaOptions                            CertificateExtensionConstraintsKnownExtensionsEnum = "CA_OPTIONS"
	CertificateExtensionConstraintsKnownExtensionsEnumPolicyIds                            CertificateExtensionConstraintsKnownExtensionsEnum = "POLICY_IDS"
	CertificateExtensionConstraintsKnownExtensionsEnumAiaOcspServers                       CertificateExtensionConstraintsKnownExtensionsEnum = "AIA_OCSP_SERVERS"
)

// CertificateExtensionConstraints
// Describes a set of X.509 extensions that may be part of some certificate issuance controls.
type CertificateExtensionConstraints struct {
	AdditionalExtensions []ObjectID                                           `json:"additionalExtensions,omitempty"`
	KnownExtensions      []CertificateExtensionConstraintsKnownExtensionsEnum `json:"knownExtensions,omitempty"`
}
