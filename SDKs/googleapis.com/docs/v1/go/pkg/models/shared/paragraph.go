package shared

// ParagraphInput
// A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
type ParagraphInput struct {
	Bullet                         *Bullet                            `json:"bullet,omitempty"`
	Elements                       []ParagraphElementInput            `json:"elements,omitempty"`
	ParagraphStyle                 *ParagraphStyle                    `json:"paragraphStyle,omitempty"`
	PositionedObjectIds            []string                           `json:"positionedObjectIds,omitempty"`
	SuggestedBulletChanges         map[string]SuggestedBullet         `json:"suggestedBulletChanges,omitempty"`
	SuggestedParagraphStyleChanges map[string]SuggestedParagraphStyle `json:"suggestedParagraphStyleChanges,omitempty"`
	SuggestedPositionedObjectIds   map[string]ObjectReferences        `json:"suggestedPositionedObjectIds,omitempty"`
}

// Paragraph
// A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
type Paragraph struct {
	Bullet                         *Bullet                            `json:"bullet,omitempty"`
	Elements                       []ParagraphElement                 `json:"elements,omitempty"`
	ParagraphStyle                 *ParagraphStyle                    `json:"paragraphStyle,omitempty"`
	PositionedObjectIds            []string                           `json:"positionedObjectIds,omitempty"`
	SuggestedBulletChanges         map[string]SuggestedBullet         `json:"suggestedBulletChanges,omitempty"`
	SuggestedParagraphStyleChanges map[string]SuggestedParagraphStyle `json:"suggestedParagraphStyleChanges,omitempty"`
	SuggestedPositionedObjectIds   map[string]ObjectReferences        `json:"suggestedPositionedObjectIds,omitempty"`
}
