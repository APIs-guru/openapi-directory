package shared

type ParagraphMarker struct {
	Bullet *Bullet         `json:"bullet"`
	Style  *ParagraphStyle `json:"style"`
}
