package shared

type GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum string

const (
	GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumPointTypeUnspecified GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum = "POINT_TYPE_UNSPECIFIED"
	GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumCenterPoint          GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum = "CENTER_POINT"
	GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnumSnappedPoint         GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum = "SNAPPED_POINT"
)

type GoogleMapsPlayablelocationsV3SampleSpacingOptions struct {
	MinSpacingMeters *float64                                                        `json:"minSpacingMeters"`
	PointType        *GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum `json:"pointType"`
}
