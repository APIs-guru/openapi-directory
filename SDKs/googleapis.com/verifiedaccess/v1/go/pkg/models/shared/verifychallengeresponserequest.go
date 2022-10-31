package shared

type VerifyChallengeResponseRequest struct {
	ChallengeResponse *SignedData `json:"challengeResponse,omitempty"`
	ExpectedIdentity  *string     `json:"expectedIdentity,omitempty"`
}
