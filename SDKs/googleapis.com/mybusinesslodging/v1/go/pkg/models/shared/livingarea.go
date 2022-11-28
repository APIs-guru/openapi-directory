package shared

// LivingArea
// An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
type LivingArea struct {
	Accessibility *LivingAreaAccessibility `json:"accessibility,omitempty"`
	Eating        *LivingAreaEating        `json:"eating,omitempty"`
	Features      *LivingAreaFeatures      `json:"features,omitempty"`
	Layout        *LivingAreaLayout        `json:"layout,omitempty"`
	Sleeping      *LivingAreaSleeping      `json:"sleeping,omitempty"`
}
