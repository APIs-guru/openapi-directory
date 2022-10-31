package shared



type Address struct {
    AdministrativeCounty *string `json:"administrative_county,omitempty"`
    BuildingName *string `json:"building_name,omitempty"`
    BuildingNumber *string `json:"building_number,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    DeliveryPointSuffix *string `json:"delivery_point_suffix,omitempty"`
    DepartmentName *string `json:"department_name,omitempty"`
    DependentLocality *string `json:"dependent_locality,omitempty"`
    DependentThoroughfare *string `json:"dependent_thoroughfare,omitempty"`
    District *string `json:"district,omitempty"`
    DoubleDependentLocality *string `json:"double_dependent_locality,omitempty"`
    Eastings *int32 `json:"eastings,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Line1 *string `json:"line_1,omitempty"`
    Line2 *string `json:"line_2,omitempty"`
    Line3 *string `json:"line_3,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Northings *int32 `json:"northings,omitempty"`
    OrganisationName *string `json:"organisation_name,omitempty"`
    PoBox *string `json:"po_box,omitempty"`
    PostTown *string `json:"post_town,omitempty"`
    PostalCounty *string `json:"postal_county,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    PostcodeInward *string `json:"postcode_inward,omitempty"`
    PostcodeOutward *string `json:"postcode_outward,omitempty"`
    PostcodeType *PostcodeTypeEnum `json:"postcode_type,omitempty"`
    Premise *string `json:"premise,omitempty"`
    SuOrganisationIndicator *string `json:"su_organisation_indicator,omitempty"`
    SubBuildingName *string `json:"sub_building_name,omitempty"`
    Thoroughfare *string `json:"thoroughfare,omitempty"`
    TraditionalCounty *string `json:"traditional_county,omitempty"`
    Udprn *int32 `json:"udprn,omitempty"`
    Umprn *string `json:"umprn,omitempty"`
    Ward *string `json:"ward,omitempty"`
    
}

