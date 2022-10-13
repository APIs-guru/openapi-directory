package shared

type SubstanceComposition struct {
	Composition map[string]interface{} `json:"composition"`
	Feature     map[string]interface{} `json:"feature"`
}
