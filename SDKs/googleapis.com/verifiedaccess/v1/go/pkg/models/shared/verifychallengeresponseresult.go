package shared

type VerifyChallengeResponseResult struct {
	DeviceEnrollmentID          *string `json:"deviceEnrollmentId"`
	DevicePermanentID           *string `json:"devicePermanentId"`
	SignedPublicKeyAndChallenge *string `json:"signedPublicKeyAndChallenge"`
	VerificationOutput          *string `json:"verificationOutput"`
}
