package shared

type PackageRepository struct {
	Apt    *AptRepository    `json:"apt"`
	Goo    *GooRepository    `json:"goo"`
	Yum    *YumRepository    `json:"yum"`
	Zypper *ZypperRepository `json:"zypper"`
}
