package shared

type APIClassifierTaxonomyOut struct {
	ClassifierName  *string  `json:"classifierName"`
	TaxonomyClasses []string `json:"taxonomyClasses"`
}
