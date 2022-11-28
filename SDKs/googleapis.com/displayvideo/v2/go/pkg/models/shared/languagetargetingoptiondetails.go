package shared

// LanguageTargetingOptionDetails
// Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.
type LanguageTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
