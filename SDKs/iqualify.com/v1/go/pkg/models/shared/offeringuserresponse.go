package shared



type OfferingUserResponse struct {
    AvatarURL *string `json:"avatarUrl,omitempty"`
    Email *string `json:"email,omitempty"`
    EvaluatedBy []string `json:"evaluatedBy,omitempty"`
    Evaluates []string `json:"evaluates,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    IsFacilitator *bool `json:"isFacilitator,omitempty"`
    IsMarker *bool `json:"isMarker,omitempty"`
    IsReadonly *bool `json:"isReadonly,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    MarkedBy []string `json:"markedBy,omitempty"`
    Marks []string `json:"marks,omitempty"`
    PersonID *string `json:"personId,omitempty"`
    Profile *UserProfile `json:"profile,omitempty"`
    
}

