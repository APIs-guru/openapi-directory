package shared

// HealthAndSafety
// Health and safety measures implemented by the hotel during COVID-19.
type HealthAndSafety struct {
	EnhancedCleaning    *EnhancedCleaning    `json:"enhancedCleaning,omitempty"`
	IncreasedFoodSafety *IncreasedFoodSafety `json:"increasedFoodSafety,omitempty"`
	MinimizedContact    *MinimizedContact    `json:"minimizedContact,omitempty"`
	PersonalProtection  *PersonalProtection  `json:"personalProtection,omitempty"`
	PhysicalDistancing  *PhysicalDistancing  `json:"physicalDistancing,omitempty"`
}
