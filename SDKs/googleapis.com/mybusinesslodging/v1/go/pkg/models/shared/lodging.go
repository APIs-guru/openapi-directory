package shared

type Lodging struct {
	Accessibility    *Accessibility     `json:"accessibility"`
	Activities       *Activities        `json:"activities"`
	AllUnits         *GuestUnitFeatures `json:"allUnits"`
	Business         *Business          `json:"business"`
	CommonLivingArea *LivingArea        `json:"commonLivingArea"`
	Connectivity     *Connectivity      `json:"connectivity"`
	Families         *Families          `json:"families"`
	FoodAndDrink     *FoodAndDrink      `json:"foodAndDrink"`
	GuestUnits       []GuestUnitType    `json:"guestUnits"`
	HealthAndSafety  *HealthAndSafety   `json:"healthAndSafety"`
	Housekeeping     *Housekeeping      `json:"housekeeping"`
	Metadata         *LodgingMetadata   `json:"metadata"`
	Name             *string            `json:"name"`
	Parking          *Parking           `json:"parking"`
	Pets             *Pets              `json:"pets"`
	Policies         *Policies          `json:"policies"`
	Pools            *Pools             `json:"pools"`
	Property         *Property          `json:"property"`
	Services         *Services          `json:"services"`
	SomeUnits        *GuestUnitFeatures `json:"someUnits"`
	Sustainability   *Sustainability    `json:"sustainability"`
	Transportation   *Transportation    `json:"transportation"`
	Wellness         *Wellness          `json:"wellness"`
}
