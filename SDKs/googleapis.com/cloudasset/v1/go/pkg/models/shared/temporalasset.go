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
	Asset           *Asset                            `json:"asset,omitempty"`
	Deleted         *bool                             `json:"deleted,omitempty"`
	PriorAsset      *Asset                            `json:"priorAsset,omitempty"`
	PriorAssetState *TemporalAssetPriorAssetStateEnum `json:"priorAssetState,omitempty"`
	Window          *TimeWindow                       `json:"window,omitempty"`
}
