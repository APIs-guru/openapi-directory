package shared

// Lodging
// Lodging of a location that provides accomodations.
type Lodging struct {
	Accessibility    *Accessibility     `json:"accessibility,omitempty"`
	Activities       *Activities        `json:"activities,omitempty"`
	AllUnits         *GuestUnitFeatures `json:"allUnits,omitempty"`
	Business         *Business          `json:"business,omitempty"`
	CommonLivingArea *LivingArea        `json:"commonLivingArea,omitempty"`
	Connectivity     *Connectivity      `json:"connectivity,omitempty"`
	Families         *Families          `json:"families,omitempty"`
	FoodAndDrink     *FoodAndDrink      `json:"foodAndDrink,omitempty"`
	GuestUnits       []GuestUnitType    `json:"guestUnits,omitempty"`
	HealthAndSafety  *HealthAndSafety   `json:"healthAndSafety,omitempty"`
	Housekeeping     *Housekeeping      `json:"housekeeping,omitempty"`
	Metadata         *LodgingMetadata   `json:"metadata,omitempty"`
	Name             *string            `json:"name,omitempty"`
	Parking          *Parking           `json:"parking,omitempty"`
	Pets             *Pets              `json:"pets,omitempty"`
	Policies         *Policies          `json:"policies,omitempty"`
	Pools            *Pools             `json:"pools,omitempty"`
	Property         *Property          `json:"property,omitempty"`
	Services         *Services          `json:"services,omitempty"`
	SomeUnits        *GuestUnitFeatures `json:"someUnits,omitempty"`
	Sustainability   *Sustainability    `json:"sustainability,omitempty"`
	Transportation   *Transportation    `json:"transportation,omitempty"`
	Wellness         *Wellness          `json:"wellness,omitempty"`
}

// LodgingInput
// Lodging of a location that provides accomodations.
type LodgingInput struct {
	Accessibility    *Accessibility       `json:"accessibility,omitempty"`
	Activities       *Activities          `json:"activities,omitempty"`
	AllUnits         *GuestUnitFeatures   `json:"allUnits,omitempty"`
	Business         *Business            `json:"business,omitempty"`
	CommonLivingArea *LivingArea          `json:"commonLivingArea,omitempty"`
	Connectivity     *Connectivity        `json:"connectivity,omitempty"`
	Families         *Families            `json:"families,omitempty"`
	FoodAndDrink     *FoodAndDrink        `json:"foodAndDrink,omitempty"`
	GuestUnits       []GuestUnitType      `json:"guestUnits,omitempty"`
	HealthAndSafety  *HealthAndSafety     `json:"healthAndSafety,omitempty"`
	Housekeeping     *Housekeeping        `json:"housekeeping,omitempty"`
	Metadata         *LodgingMetadata     `json:"metadata,omitempty"`
	Name             *string              `json:"name,omitempty"`
	Parking          *Parking             `json:"parking,omitempty"`
	Pets             *Pets                `json:"pets,omitempty"`
	Policies         *Policies            `json:"policies,omitempty"`
	Pools            *Pools               `json:"pools,omitempty"`
	Property         *Property            `json:"property,omitempty"`
	Services         *Services            `json:"services,omitempty"`
	SomeUnits        *GuestUnitFeatures   `json:"someUnits,omitempty"`
	Sustainability   *SustainabilityInput `json:"sustainability,omitempty"`
	Transportation   *Transportation      `json:"transportation,omitempty"`
	Wellness         *Wellness            `json:"wellness,omitempty"`
}
