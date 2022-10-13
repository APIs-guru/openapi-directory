package shared

type PgpSignedAttestationContentTypeEnum string

const (
	PgpSignedAttestationContentTypeEnumContentTypeUnspecified PgpSignedAttestationContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	PgpSignedAttestationContentTypeEnumSimpleSigningJSON      PgpSignedAttestationContentTypeEnum = "SIMPLE_SIGNING_JSON"
)

type PgpSignedAttestation struct {
	ContentType *PgpSignedAttestationContentTypeEnum `json:"contentType"`
	PgpKeyID    *string                              `json:"pgpKeyId"`
	Signature   *string                              `json:"signature"`
}
