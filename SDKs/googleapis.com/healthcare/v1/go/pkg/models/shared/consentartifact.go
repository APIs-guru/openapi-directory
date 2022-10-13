package shared

type ConsentArtifact struct {
	ConsentContentScreenshots []Image           `json:"consentContentScreenshots"`
	ConsentContentVersion     *string           `json:"consentContentVersion"`
	GuardianSignature         *Signature        `json:"guardianSignature"`
	Metadata                  map[string]string `json:"metadata"`
	Name                      *string           `json:"name"`
	UserID                    *string           `json:"userId"`
	UserSignature             *Signature        `json:"userSignature"`
	WitnessSignature          *Signature        `json:"witnessSignature"`
}
