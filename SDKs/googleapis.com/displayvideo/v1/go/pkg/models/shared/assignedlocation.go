package shared

// AssignedLocationInput
// An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
type AssignedLocationInput struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// AssignedLocation
// An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
type AssignedLocation struct {
	AssignedLocationID *string `json:"assignedLocationId,omitempty"`
	Name               *string `json:"name,omitempty"`
	TargetingOptionID  *string `json:"targetingOptionId,omitempty"`
}
