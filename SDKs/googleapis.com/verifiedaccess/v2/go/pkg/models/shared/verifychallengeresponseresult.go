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
	DevicePermanentID           *string                                         `json:"devicePermanentId"`
	DeviceSignal                *string                                         `json:"deviceSignal"`
	KeyTrustLevel               *VerifyChallengeResponseResultKeyTrustLevelEnum `json:"keyTrustLevel"`
	SignedPublicKeyAndChallenge *string                                         `json:"signedPublicKeyAndChallenge"`
}
