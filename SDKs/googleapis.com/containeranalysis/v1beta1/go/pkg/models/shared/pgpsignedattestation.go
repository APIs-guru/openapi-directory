package shared

type PgpSignedAttestationContentTypeEnum string

const (
	PgpSignedAttestationContentTypeEnumContentTypeUnspecified PgpSignedAttestationContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	PgpSignedAttestationContentTypeEnumSimpleSigningJSON      PgpSignedAttestationContentTypeEnum = "SIMPLE_SIGNING_JSON"
)

// PgpSignedAttestation
// An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
type PgpSignedAttestation struct {
	ContentType *PgpSignedAttestationContentTypeEnum `json:"contentType,omitempty"`
	PgpKeyID    *string                              `json:"pgpKeyId,omitempty"`
	Signature   *string                              `json:"signature,omitempty"`
}
