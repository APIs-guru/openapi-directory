package shared

type VerifyChallengeResponseRequest struct {
	ChallengeResponse *string `json:"challengeResponse"`
	ExpectedIdentity  *string `json:"expectedIdentity"`
}
