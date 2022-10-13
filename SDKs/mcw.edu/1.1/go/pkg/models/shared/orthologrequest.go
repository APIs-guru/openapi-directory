package shared

type OrthologRequest struct {
	RgdIds          []int32 `json:"rgdIds"`
	SpeciesTypeKeys []int32 `json:"speciesTypeKeys"`
}
