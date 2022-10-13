package shared

type AttestationOccurrence struct {
	Jwts              []Jwt       `json:"jwts"`
	SerializedPayload *string     `json:"serializedPayload"`
	Signatures        []Signature `json:"signatures"`
}
