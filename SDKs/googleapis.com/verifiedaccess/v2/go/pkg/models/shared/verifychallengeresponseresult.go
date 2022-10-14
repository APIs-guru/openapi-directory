package shared

type VerifyChallengeResponseResultKeyTrustLevelEnum string

const (
	VerifyChallengeResponseResultKeyTrustLevelEnumKeyTrustLevelUnspecified VerifyChallengeResponseResultKeyTrustLevelEnum = "KEY_TRUST_LEVEL_UNSPECIFIED"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeOsVerifiedMode     VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_OS_VERIFIED_MODE"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeOsDeveloperMode    VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_OS_DEVELOPER_MODE"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeBrowserTpmKey      VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_BROWSER_TPM_KEY"
	VerifyChallengeResponseResultKeyTrustLevelEnumChromeBrowserOsKey       VerifyChallengeResponseResultKeyTrustLevelEnum = "CHROME_BROWSER_OS_KEY"
)

type VerifyChallengeResponseResult struct {
	DevicePermanentID           *string                                         `json:"devicePermanentId,omitempty"`
	DeviceSignal                *string                                         `json:"deviceSignal,omitempty"`
	KeyTrustLevel               *VerifyChallengeResponseResultKeyTrustLevelEnum `json:"keyTrustLevel,omitempty"`
	SignedPublicKeyAndChallenge *string                                         `json:"signedPublicKeyAndChallenge,omitempty"`
}
