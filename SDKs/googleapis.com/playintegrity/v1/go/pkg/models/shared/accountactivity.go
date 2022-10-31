package shared




type AccountActivityActivityLevelEnum string

const (
    AccountActivityActivityLevelEnumActivityLevelUnspecified AccountActivityActivityLevelEnum = "ACTIVITY_LEVEL_UNSPECIFIED"
AccountActivityActivityLevelEnumUnevaluated AccountActivityActivityLevelEnum = "UNEVALUATED"
AccountActivityActivityLevelEnumUnusual AccountActivityActivityLevelEnum = "UNUSUAL"
AccountActivityActivityLevelEnumUnknown AccountActivityActivityLevelEnum = "UNKNOWN"
AccountActivityActivityLevelEnumTypicalBasic AccountActivityActivityLevelEnum = "TYPICAL_BASIC"
AccountActivityActivityLevelEnumTypicalStrong AccountActivityActivityLevelEnum = "TYPICAL_STRONG"
)


type AccountActivity struct {
    ActivityLevel *AccountActivityActivityLevelEnum `json:"activityLevel,omitempty"`
    
}

