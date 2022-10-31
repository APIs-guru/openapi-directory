package shared



type APIClassifierTaxonomyOut struct {
    ClassifierName *string `json:"classifierName,omitempty"`
    TaxonomyClasses []string `json:"taxonomyClasses,omitempty"`
    
}

