package shared

type OfferingUserResponse struct {
	AvatarURL     *string      `json:"avatarUrl"`
	Email         *string      `json:"email"`
	EvaluatedBy   []string     `json:"evaluatedBy"`
	Evaluates     []string     `json:"evaluates"`
	FirstName     *string      `json:"firstName"`
	ID            *string      `json:"id"`
	IsFacilitator *bool        `json:"isFacilitator"`
	IsMarker      *bool        `json:"isMarker"`
	IsReadonly    *bool        `json:"isReadonly"`
	LastName      *string      `json:"lastName"`
	MarkedBy      []string     `json:"markedBy"`
	Marks         []string     `json:"marks"`
	PersonID      *string      `json:"personId"`
	Profile       *UserProfile `json:"profile"`
}
