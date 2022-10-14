package shared

type SuggestedBullet struct {
	Bullet                *Bullet                `json:"bullet,omitempty"`
	BulletSuggestionState *BulletSuggestionState `json:"bulletSuggestionState,omitempty"`
}
