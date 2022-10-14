package shared

type AdvertiserAndBrand struct {
	AdvertiserID   *string `json:"advertiserId,omitempty"`
	AdvertiserName *string `json:"advertiserName,omitempty"`
	BrandID        *string `json:"brandId,omitempty"`
	BrandName      *string `json:"brandName,omitempty"`
}
