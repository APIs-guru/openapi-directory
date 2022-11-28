package shared

type KeyOperationAttestationFormatEnum string

const (
	KeyOperationAttestationFormatEnumAttestationFormatUnspecified KeyOperationAttestationFormatEnum = "ATTESTATION_FORMAT_UNSPECIFIED"
	KeyOperationAttestationFormatEnumCaviumV1Compressed           KeyOperationAttestationFormatEnum = "CAVIUM_V1_COMPRESSED"
	KeyOperationAttestationFormatEnumCaviumV2Compressed           KeyOperationAttestationFormatEnum = "CAVIUM_V2_COMPRESSED"
)

// KeyOperationAttestationInput
// Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
type KeyOperationAttestationInput struct {
	CertChains *CertificateChains `json:"certChains,omitempty"`
}

// KeyOperationAttestation
// Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
type KeyOperationAttestation struct {
	CertChains *CertificateChains                 `json:"certChains,omitempty"`
	Content    *string                            `json:"content,omitempty"`
	Format     *KeyOperationAttestationFormatEnum `json:"format,omitempty"`
}
