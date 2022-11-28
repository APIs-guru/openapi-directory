package shared

// VerifyChallengeResponseRequest
// signed ChallengeResponse
type VerifyChallengeResponseRequest struct {
	ChallengeResponse *SignedData `json:"challengeResponse,omitempty"`
	ExpectedIdentity  *string     `json:"expectedIdentity,omitempty"`
}
