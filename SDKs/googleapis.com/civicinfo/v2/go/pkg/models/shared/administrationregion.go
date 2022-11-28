package shared

// AdministrationRegion
// Describes information about a regional election administrative area.
type AdministrationRegion struct {
	ElectionAdministrationBody *AdministrativeBody   `json:"electionAdministrationBody,omitempty"`
	LocalJurisdiction          *AdministrationRegion `json:"local_jurisdiction,omitempty"`
	Name                       *string               `json:"name,omitempty"`
	Sources                    []Source              `json:"sources,omitempty"`
}
