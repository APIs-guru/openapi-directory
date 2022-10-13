package shared

type LivingArea struct {
	Accessibility *LivingAreaAccessibility `json:"accessibility"`
	Eating        *LivingAreaEating        `json:"eating"`
	Features      *LivingAreaFeatures      `json:"features"`
	Layout        *LivingAreaLayout        `json:"layout"`
	Sleeping      *LivingAreaSleeping      `json:"sleeping"`
}
