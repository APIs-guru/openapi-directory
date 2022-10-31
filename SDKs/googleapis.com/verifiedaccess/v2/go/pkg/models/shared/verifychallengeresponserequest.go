package shared

type VerifyChallengeResponseRequest struct {
	ChallengeResponse *string `json:"challengeResponse,omitempty"`
	ExpectedIdentity  *string `json:"expectedIdentity,omitempty"`
}
