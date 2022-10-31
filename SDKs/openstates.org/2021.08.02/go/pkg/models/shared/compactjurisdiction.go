package shared

type CompactJurisdiction struct {
	Classification JurisdictionClassificationEnum `json:"classification"`
	ID             string                         `json:"id"`
	Name           string                         `json:"name"`
}
