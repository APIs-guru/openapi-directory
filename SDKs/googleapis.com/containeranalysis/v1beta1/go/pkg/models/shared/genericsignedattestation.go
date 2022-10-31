package shared

type GenericSignedAttestationContentTypeEnum string

const (
	GenericSignedAttestationContentTypeEnumContentTypeUnspecified GenericSignedAttestationContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	GenericSignedAttestationContentTypeEnumSimpleSigningJSON      GenericSignedAttestationContentTypeEnum = "SIMPLE_SIGNING_JSON"
)

type GenericSignedAttestation struct {
	ContentType       *GenericSignedAttestationContentTypeEnum `json:"contentType,omitempty"`
	SerializedPayload *string                                  `json:"serializedPayload,omitempty"`
	Signatures        []Signature                              `json:"signatures,omitempty"`
}
