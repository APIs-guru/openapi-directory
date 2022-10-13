package shared

type HealthAndSafety struct {
	EnhancedCleaning    *EnhancedCleaning    `json:"enhancedCleaning"`
	IncreasedFoodSafety *IncreasedFoodSafety `json:"increasedFoodSafety"`
	MinimizedContact    *MinimizedContact    `json:"minimizedContact"`
	PersonalProtection  *PersonalProtection  `json:"personalProtection"`
	PhysicalDistancing  *PhysicalDistancing  `json:"physicalDistancing"`
}
