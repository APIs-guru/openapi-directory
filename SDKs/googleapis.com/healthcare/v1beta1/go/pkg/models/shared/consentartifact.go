package shared

// ConsentArtifact
// Documentation of a user's consent.
type ConsentArtifact struct {
	ConsentContentScreenshots []Image           `json:"consentContentScreenshots,omitempty"`
	ConsentContentVersion     *string           `json:"consentContentVersion,omitempty"`
	GuardianSignature         *Signature        `json:"guardianSignature,omitempty"`
	Metadata                  map[string]string `json:"metadata,omitempty"`
	Name                      *string           `json:"name,omitempty"`
	UserID                    *string           `json:"userId,omitempty"`
	UserSignature             *Signature        `json:"userSignature,omitempty"`
	WitnessSignature          *Signature        `json:"witnessSignature,omitempty"`
}
