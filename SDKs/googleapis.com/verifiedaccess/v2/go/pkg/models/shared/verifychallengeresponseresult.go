package shared

type VerifyChallengeResponseResultKeyTrustLevelEnum string

const (
	VerifyChallengeResponseResultKeyTrustLevelEnumKeyTrustLevelUnspecified VerifyChallengeResponseResultKeyTrustLevelEnum = "KEY_TRUST_LEVEL_UNSPECIFIED"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeOsVerifiedMode     VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_OS_VERIFIED_MODE"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeOsDeveloperMode    VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_OS_DEVELOPER_MODE"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeBrowserHwKey       VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_BROWSER_HW_KEY"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeBrowserOsKey       VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_BROWSER_OS_KEY"
)

// VerifyChallengeResponseResult
// Result message for VerifiedAccess.VerifyChallengeResponse.
type VerifyChallengeResponseResult struct {
	CustomerID                  *string                                         `json:"customerId,omitempty"`
	DevicePermanentID           *string                                         `json:"devicePermanentId,omitempty"`
	DeviceSignal                *string                                         `json:"deviceSignal,omitempty"`
	KeyTrustLevel               *VerifyChallengeResponseResultKeyTrustLevelEnum `json:"keyTrustLevel,omitempty"`
	SignedPublicKeyAndChallenge *string                                         `json:"signedPublicKeyAndChallenge,omitempty"`
	VirtualDeviceID             *string                                         `json:"virtualDeviceId,omitempty"`
}
