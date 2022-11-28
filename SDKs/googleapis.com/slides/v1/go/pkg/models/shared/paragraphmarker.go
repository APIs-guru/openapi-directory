package shared

// ParagraphMarker
// A TextElement kind that represents the beginning of a new paragraph.
type ParagraphMarker struct {
	Bullet *Bullet         `json:"bullet,omitempty"`
	Style  *ParagraphStyle `json:"style,omitempty"`
}
