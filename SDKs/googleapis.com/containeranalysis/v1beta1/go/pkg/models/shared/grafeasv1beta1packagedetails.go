package shared

// GrafeasV1beta1PackageDetails
// Details of a package occurrence.
type GrafeasV1beta1PackageDetails struct {
	Installation *Installation `json:"installation,omitempty"`
}

// GrafeasV1beta1PackageDetailsInput
// Details of a package occurrence.
type GrafeasV1beta1PackageDetailsInput struct {
	Installation *InstallationInput `json:"installation,omitempty"`
}
