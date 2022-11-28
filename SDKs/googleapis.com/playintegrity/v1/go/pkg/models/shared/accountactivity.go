package shared

type AccountActivityActivityLevelEnum string

const (
	AccountActivityActivityLevelEnumActivityLevelUnspecified AccountActivityActivityLevelEnum = "ACTIVITY_LEVEL_UNSPECIFIED"
	AccountActivityActivityLevelEnumUnevaluated              AccountActivityActivityLevelEnum = "UNEVALUATED"
	AccountActivityActivityLevelEnumUnusual                  AccountActivityActivityLevelEnum = "UNUSUAL"
	AccountActivityActivityLevelEnumUnknown                  AccountActivityActivityLevelEnum = "UNKNOWN"
	AccountActivityActivityLevelEnumTypicalBasic             AccountActivityActivityLevelEnum = "TYPICAL_BASIC"
	AccountActivityActivityLevelEnumTypicalStrong            AccountActivityActivityLevelEnum = "TYPICAL_STRONG"
)

// AccountActivity
// Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
type AccountActivity struct {
	ActivityLevel *AccountActivityActivityLevelEnum `json:"activityLevel,omitempty"`
}
