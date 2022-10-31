package shared



type PackageRepository struct {
    Apt *AptRepository `json:"apt,omitempty"`
    Goo *GooRepository `json:"goo,omitempty"`
    Yum *YumRepository `json:"yum,omitempty"`
    Zypper *ZypperRepository `json:"zypper,omitempty"`
    
}

