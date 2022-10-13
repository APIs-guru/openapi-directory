package shared

type EntityMentionRelationship struct {
	Confidence *float64 `json:"confidence"`
	ObjectID   *string  `json:"objectId"`
	SubjectID  *string  `json:"subjectId"`
}
