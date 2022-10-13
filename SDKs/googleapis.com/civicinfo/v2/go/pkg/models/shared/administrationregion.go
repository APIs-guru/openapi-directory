package shared

type AdministrationRegion struct {
	ElectionAdministrationBody *AdministrativeBody   `json:"electionAdministrationBody"`
	LocalJurisdiction          *AdministrationRegion `json:"local_jurisdiction"`
	Name                       *string               `json:"name"`
	Sources                    []Source              `json:"sources"`
}
