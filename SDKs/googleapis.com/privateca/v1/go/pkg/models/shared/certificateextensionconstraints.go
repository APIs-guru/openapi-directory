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

type CertificateExtensionConstraints struct {
	AdditionalExtensions []ObjectID                                           `json:"additionalExtensions"`
	KnownExtensions      []CertificateExtensionConstraintsKnownExtensionsEnum `json:"knownExtensions"`
}
