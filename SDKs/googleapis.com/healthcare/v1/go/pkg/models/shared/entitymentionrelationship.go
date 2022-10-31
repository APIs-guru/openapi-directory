package shared

type EntityMentionRelationship struct {
	Confidence *float64 `json:"confidence,omitempty"`
	ObjectID   *string  `json:"objectId,omitempty"`
	SubjectID  *string  `json:"subjectId,omitempty"`
}
