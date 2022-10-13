package shared

type KeyOperationAttestationFormatEnum string

const (
	KeyOperationAttestationFormatEnumAttestationFormatUnspecified KeyOperationAttestationFormatEnum = "ATTESTATION_FORMAT_UNSPECIFIED"
	KeyOperationAttestationFormatEnumCaviumV1Compressed           KeyOperationAttestationFormatEnum = "CAVIUM_V1_COMPRESSED"
	KeyOperationAttestationFormatEnumCaviumV2Compressed           KeyOperationAttestationFormatEnum = "CAVIUM_V2_COMPRESSED"
)

type KeyOperationAttestation struct {
	CertChains *CertificateChains                 `json:"certChains"`
	Content    *string                            `json:"content"`
	Format     *KeyOperationAttestationFormatEnum `json:"format"`
}
