package shared

type SearchTargetingOptionsRequest struct {
	AdvertiserID             *string                   `json:"advertiserId"`
	BusinessChainSearchTerms *BusinessChainSearchTerms `json:"businessChainSearchTerms"`
	GeoRegionSearchTerms     *GeoRegionSearchTerms     `json:"geoRegionSearchTerms"`
	PageSize                 *int32                    `json:"pageSize"`
	PageToken                *string                   `json:"pageToken"`
	PoiSearchTerms           *PoiSearchTerms           `json:"poiSearchTerms"`
}
