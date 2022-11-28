package shared

// InTotoStatement
// Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
type InTotoStatement struct {
	Type                  *string                `json:"_type,omitempty"`
	PredicateType         *string                `json:"predicateType,omitempty"`
	Provenance            *InTotoProvenance      `json:"provenance,omitempty"`
	SlsaProvenance        *SlsaProvenance        `json:"slsaProvenance,omitempty"`
	SlsaProvenanceZeroTwo *SlsaProvenanceZeroTwo `json:"slsaProvenanceZeroTwo,omitempty"`
	Subject               []Subject              `json:"subject,omitempty"`
}
