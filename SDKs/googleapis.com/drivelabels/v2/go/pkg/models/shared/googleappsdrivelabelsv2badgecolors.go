package shared

// GoogleAppsDriveLabelsV2BadgeColors
// The color derived from BadgeConfig and changed to the closest recommended supported color.
type GoogleAppsDriveLabelsV2BadgeColors struct {
	BackgroundColor *GoogleTypeColor `json:"backgroundColor,omitempty"`
	ForegroundColor *GoogleTypeColor `json:"foregroundColor,omitempty"`
	SoloColor       *GoogleTypeColor `json:"soloColor,omitempty"`
}
