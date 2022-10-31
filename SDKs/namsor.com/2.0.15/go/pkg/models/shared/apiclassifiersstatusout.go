package shared



type APIClassifiersStatusOut struct {
    Classifiers []APIClassifierOut `json:"classifiers,omitempty"`
    SoftwareVersion *SoftwareVersionOut `json:"softwareVersion,omitempty"`
    
}

