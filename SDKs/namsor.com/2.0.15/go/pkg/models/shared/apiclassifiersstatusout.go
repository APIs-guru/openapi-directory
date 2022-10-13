package shared

type APIClassifiersStatusOut struct {
	Classifiers     []APIClassifierOut  `json:"classifiers"`
	SoftwareVersion *SoftwareVersionOut `json:"softwareVersion"`
}
