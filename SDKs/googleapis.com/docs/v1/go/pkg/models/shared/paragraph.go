package shared

type Paragraph struct {
	Bullet                         *Bullet                            `json:"bullet"`
	Elements                       []ParagraphElement                 `json:"elements"`
	ParagraphStyle                 *ParagraphStyle                    `json:"paragraphStyle"`
	PositionedObjectIds            []string                           `json:"positionedObjectIds"`
	SuggestedBulletChanges         map[string]SuggestedBullet         `json:"suggestedBulletChanges"`
	SuggestedParagraphStyleChanges map[string]SuggestedParagraphStyle `json:"suggestedParagraphStyleChanges"`
	SuggestedPositionedObjectIds   map[string]ObjectReferences        `json:"suggestedPositionedObjectIds"`
}
