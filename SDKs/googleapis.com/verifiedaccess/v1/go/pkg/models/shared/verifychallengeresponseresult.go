package shared



type VerifyChallengeResponseResult struct {
    DeviceEnrollmentID *string `json:"deviceEnrollmentId,omitempty"`
    DevicePermanentID *string `json:"devicePermanentId,omitempty"`
    SignedPublicKeyAndChallenge *string `json:"signedPublicKeyAndChallenge,omitempty"`
    VerificationOutput *string `json:"verificationOutput,omitempty"`
    
}

