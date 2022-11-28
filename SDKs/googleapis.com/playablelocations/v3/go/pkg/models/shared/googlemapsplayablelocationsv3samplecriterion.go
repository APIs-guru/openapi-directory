package shared

// GoogleMapsPlayablelocationsV3SampleCriterion
// Encapsulates a filter criterion for searching for a set of playable locations.
type GoogleMapsPlayablelocationsV3SampleCriterion struct {
	FieldsToReturn *string                                    `json:"fieldsToReturn,omitempty"`
	Filter         *GoogleMapsPlayablelocationsV3SampleFilter `json:"filter,omitempty"`
	GameObjectType *int32                                     `json:"gameObjectType,omitempty"`
}
