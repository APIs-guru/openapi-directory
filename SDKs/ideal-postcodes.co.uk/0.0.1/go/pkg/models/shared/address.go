package shared

type Address struct {
	AdministrativeCounty    *string           `json:"administrative_county"`
	BuildingName            *string           `json:"building_name"`
	BuildingNumber          *string           `json:"building_number"`
	Country                 *string           `json:"country"`
	County                  *string           `json:"county"`
	DeliveryPointSuffix     *string           `json:"delivery_point_suffix"`
	DepartmentName          *string           `json:"department_name"`
	DependentLocality       *string           `json:"dependent_locality"`
	DependentThoroughfare   *string           `json:"dependent_thoroughfare"`
	District                *string           `json:"district"`
	DoubleDependentLocality *string           `json:"double_dependent_locality"`
	Eastings                *int32            `json:"eastings"`
	Latitude                *float64          `json:"latitude"`
	Line1                   *string           `json:"line_1"`
	Line2                   *string           `json:"line_2"`
	Line3                   *string           `json:"line_3"`
	Longitude               *float64          `json:"longitude"`
	Northings               *int32            `json:"northings"`
	OrganisationName        *string           `json:"organisation_name"`
	PoBox                   *string           `json:"po_box"`
	PostTown                *string           `json:"post_town"`
	PostalCounty            *string           `json:"postal_county"`
	Postcode                *string           `json:"postcode"`
	PostcodeInward          *string           `json:"postcode_inward"`
	PostcodeOutward         *string           `json:"postcode_outward"`
	PostcodeType            *PostcodeTypeEnum `json:"postcode_type"`
	Premise                 *string           `json:"premise"`
	SuOrganisationIndicator *string           `json:"su_organisation_indicator"`
	SubBuildingName         *string           `json:"sub_building_name"`
	Thoroughfare            *string           `json:"thoroughfare"`
	TraditionalCounty       *string           `json:"traditional_county"`
	Udprn                   *int32            `json:"udprn"`
	Umprn                   *string           `json:"umprn"`
	Ward                    *string           `json:"ward"`
}
