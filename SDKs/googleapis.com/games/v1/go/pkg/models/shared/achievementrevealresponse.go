package shared

type AchievementRevealResponseCurrentStateEnum string

const (
	AchievementRevealResponseCurrentStateEnumRevealAchievementStateUnspecified AchievementRevealResponseCurrentStateEnum = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED"
	AchievementRevealResponseCurrentStateEnumRevealed                          AchievementRevealResponseCurrentStateEnum = "REVEALED"
	AchievementRevealResponseCurrentStateEnumUnlocked                          AchievementRevealResponseCurrentStateEnum = "UNLOCKED"
)

// AchievementRevealResponse
// An achievement reveal response
type AchievementRevealResponse struct {
	CurrentState *AchievementRevealResponseCurrentStateEnum `json:"currentState,omitempty"`
	Kind         *string                                    `json:"kind,omitempty"`
}
