package shared

type GenericSignedAttestationContentTypeEnum string

const (
	GenericSignedAttestationContentTypeEnumContentTypeUnspecified GenericSignedAttestationContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	GenericSignedAttestationContentTypeEnumSimpleSigningJSON      GenericSignedAttestationContentTypeEnum = "SIMPLE_SIGNING_JSON"
)

// GenericSignedAttestation
// An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
type GenericSignedAttestation struct {
	ContentType       *GenericSignedAttestationContentTypeEnum `json:"contentType,omitempty"`
	SerializedPayload *string                                  `json:"serializedPayload,omitempty"`
	Signatures        []Signature                              `json:"signatures,omitempty"`
}
