package shared

type SuggestedBullet struct {
	Bullet                *Bullet                `json:"bullet"`
	BulletSuggestionState *BulletSuggestionState `json:"bulletSuggestionState"`
}
