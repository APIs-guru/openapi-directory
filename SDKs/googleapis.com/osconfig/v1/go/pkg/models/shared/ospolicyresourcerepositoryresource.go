package shared

type OsPolicyResourceRepositoryResource struct {
	Apt    *OsPolicyResourceRepositoryResourceAptRepository    `json:"apt"`
	Goo    *OsPolicyResourceRepositoryResourceGooRepository    `json:"goo"`
	Yum    *OsPolicyResourceRepositoryResourceYumRepository    `json:"yum"`
	Zypper *OsPolicyResourceRepositoryResourceZypperRepository `json:"zypper"`
}
