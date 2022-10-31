package shared

type OsPolicyResourceRepositoryResource struct {
	Apt    *OsPolicyResourceRepositoryResourceAptRepository    `json:"apt,omitempty"`
	Goo    *OsPolicyResourceRepositoryResourceGooRepository    `json:"goo,omitempty"`
	Yum    *OsPolicyResourceRepositoryResourceYumRepository    `json:"yum,omitempty"`
	Zypper *OsPolicyResourceRepositoryResourceZypperRepository `json:"zypper,omitempty"`
}
