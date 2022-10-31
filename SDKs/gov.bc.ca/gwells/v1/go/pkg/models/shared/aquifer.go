package shared



type Aquifer struct {
    AquiferID *int64 `json:"aquifer_id,omitempty"`
    AquiferName *string `json:"aquifer_name,omitempty"`
    Area *string `json:"area,omitempty"`
    Demand *string `json:"demand,omitempty"`
    DemandDescription *string `json:"demand_description,omitempty"`
    KnownWaterUse *string `json:"known_water_use,omitempty"`
    KnownWaterUseDescription *string `json:"known_water_use_description,omitempty"`
    LithoStratographicUnit *string `json:"litho_stratographic_unit,omitempty"`
    LocationDescription *string `json:"location_description,omitempty"`
    MappingYear *int64 `json:"mapping_year,omitempty"`
    Material *string `json:"material,omitempty"`
    MaterialDescription *string `json:"material_description,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Productivity *string `json:"productivity,omitempty"`
    ProductivityDescription *string `json:"productivity_description,omitempty"`
    QualityConcern *string `json:"quality_concern,omitempty"`
    QualityConcernDescription *string `json:"quality_concern_description,omitempty"`
    Subtype *string `json:"subtype,omitempty"`
    SubtypeDescription *string `json:"subtype_description,omitempty"`
    Vulnerability *string `json:"vulnerability,omitempty"`
    VulnerabilityDescription *string `json:"vulnerability_description,omitempty"`
    
}

