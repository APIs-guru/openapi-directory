package shared

// SuggestedBullet
// A suggested change to a Bullet.
type SuggestedBullet struct {
	Bullet                *Bullet                `json:"bullet,omitempty"`
	BulletSuggestionState *BulletSuggestionState `json:"bulletSuggestionState,omitempty"`
}
