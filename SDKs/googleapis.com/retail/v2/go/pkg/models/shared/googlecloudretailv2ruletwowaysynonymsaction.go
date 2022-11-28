package shared

// GoogleCloudRetailV2RuleTwowaySynonymsAction
// Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
type GoogleCloudRetailV2RuleTwowaySynonymsAction struct {
	Synonyms []string `json:"synonyms,omitempty"`
}
