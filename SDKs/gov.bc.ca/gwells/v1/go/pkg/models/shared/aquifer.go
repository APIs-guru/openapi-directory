package shared

type Aquifer struct {
	AquiferID                 *int64  `json:"aquifer_id"`
	AquiferName               *string `json:"aquifer_name"`
	Area                      *string `json:"area"`
	Demand                    *string `json:"demand"`
	DemandDescription         *string `json:"demand_description"`
	KnownWaterUse             *string `json:"known_water_use"`
	KnownWaterUseDescription  *string `json:"known_water_use_description"`
	LithoStratographicUnit    *string `json:"litho_stratographic_unit"`
	LocationDescription       *string `json:"location_description"`
	MappingYear               *int64  `json:"mapping_year"`
	Material                  *string `json:"material"`
	MaterialDescription       *string `json:"material_description"`
	Notes                     *string `json:"notes"`
	Productivity              *string `json:"productivity"`
	ProductivityDescription   *string `json:"productivity_description"`
	QualityConcern            *string `json:"quality_concern"`
	QualityConcernDescription *string `json:"quality_concern_description"`
	Subtype                   *string `json:"subtype"`
	SubtypeDescription        *string `json:"subtype_description"`
	Vulnerability             *string `json:"vulnerability"`
	VulnerabilityDescription  *string `json:"vulnerability_description"`
}
