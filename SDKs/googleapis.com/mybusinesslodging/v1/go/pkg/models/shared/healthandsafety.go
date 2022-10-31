package shared



type HealthAndSafety struct {
    EnhancedCleaning *EnhancedCleaning `json:"enhancedCleaning,omitempty"`
    IncreasedFoodSafety *IncreasedFoodSafety `json:"increasedFoodSafety,omitempty"`
    MinimizedContact *MinimizedContact `json:"minimizedContact,omitempty"`
    PersonalProtection *PersonalProtection `json:"personalProtection,omitempty"`
    PhysicalDistancing *PhysicalDistancing `json:"physicalDistancing,omitempty"`
    
}

