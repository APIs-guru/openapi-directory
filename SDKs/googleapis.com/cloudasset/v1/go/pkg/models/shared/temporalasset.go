package shared

type TemporalAssetPriorAssetStateEnum string

const (
	TemporalAssetPriorAssetStateEnumPriorAssetStateUnspecified TemporalAssetPriorAssetStateEnum = "PRIOR_ASSET_STATE_UNSPECIFIED"
	TemporalAssetPriorAssetStateEnumPresent                    TemporalAssetPriorAssetStateEnum = "PRESENT"
	TemporalAssetPriorAssetStateEnumInvalid                    TemporalAssetPriorAssetStateEnum = "INVALID"
	TemporalAssetPriorAssetStateEnumDoesNotExist               TemporalAssetPriorAssetStateEnum = "DOES_NOT_EXIST"
	TemporalAssetPriorAssetStateEnumDeleted                    TemporalAssetPriorAssetStateEnum = "DELETED"
)

// TemporalAsset
// An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
type TemporalAsset struct {
	Asset           *Asset                            `json:"asset,omitempty"`
	Deleted         *bool                             `json:"deleted,omitempty"`
	PriorAsset      *Asset                            `json:"priorAsset,omitempty"`
	PriorAssetState *TemporalAssetPriorAssetStateEnum `json:"priorAssetState,omitempty"`
	Window          *TimeWindow                       `json:"window,omitempty"`
}
