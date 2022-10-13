package shared

type AdvertiserAndBrand struct {
	AdvertiserID   *string `json:"advertiserId"`
	AdvertiserName *string `json:"advertiserName"`
	BrandID        *string `json:"brandId"`
	BrandName      *string `json:"brandName"`
}
