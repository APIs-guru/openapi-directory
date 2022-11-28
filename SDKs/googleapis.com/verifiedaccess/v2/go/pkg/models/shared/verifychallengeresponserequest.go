package shared

// VerifyChallengeResponseRequest
// Signed ChallengeResponse.
type VerifyChallengeResponseRequest struct {
	ChallengeResponse *string `json:"challengeResponse,omitempty"`
	ExpectedIdentity  *string `json:"expectedIdentity,omitempty"`
}
