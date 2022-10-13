package shared

type TemporalAssetPriorAssetStateEnum string

const (
	TemporalAssetPriorAssetStateEnumPriorAssetStateUnspecified TemporalAssetPriorAssetStateEnum = "PRIOR_ASSET_STATE_UNSPECIFIED"
	TemporalAssetPriorAssetStateEnumPresent                    TemporalAssetPriorAssetStateEnum = "PRESENT"
	TemporalAssetPriorAssetStateEnumInvalid                    TemporalAssetPriorAssetStateEnum = "INVALID"
	TemporalAssetPriorAssetStateEnumDoesNotExist               TemporalAssetPriorAssetStateEnum = "DOES_NOT_EXIST"
	TemporalAssetPriorAssetStateEnumDeleted                    TemporalAssetPriorAssetStateEnum = "DELETED"
)

type TemporalAsset struct {
	Asset           *Asset                            `json:"asset"`
	Deleted         *bool                             `json:"deleted"`
	PriorAsset      *Asset                            `json:"priorAsset"`
	PriorAssetState *TemporalAssetPriorAssetStateEnum `json:"priorAssetState"`
	Window          *TimeWindow                       `json:"window"`
}
