package shared

type VerifyChallengeResponseRequest struct {
	ChallengeResponse *SignedData `json:"challengeResponse"`
	ExpectedIdentity  *string     `json:"expectedIdentity"`
}
