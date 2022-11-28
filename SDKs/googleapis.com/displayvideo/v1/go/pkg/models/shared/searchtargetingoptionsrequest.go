package shared

// SearchTargetingOptionsRequest
// Request message for SearchTargetingOptions.
type SearchTargetingOptionsRequest struct {
	AdvertiserID             *string                   `json:"advertiserId,omitempty"`
	BusinessChainSearchTerms *BusinessChainSearchTerms `json:"businessChainSearchTerms,omitempty"`
	GeoRegionSearchTerms     *GeoRegionSearchTerms     `json:"geoRegionSearchTerms,omitempty"`
	PageSize                 *int32                    `json:"pageSize,omitempty"`
	PageToken                *string                   `json:"pageToken,omitempty"`
	PoiSearchTerms           *PoiSearchTerms           `json:"poiSearchTerms,omitempty"`
}
