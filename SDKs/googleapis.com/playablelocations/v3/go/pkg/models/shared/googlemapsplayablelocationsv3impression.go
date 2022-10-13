package shared

type GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum string

const (
	GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumImpressionTypeUnspecified GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum = "IMPRESSION_TYPE_UNSPECIFIED"
	GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumPresented                 GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum = "PRESENTED"
	GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted                GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum = "INTERACTED"
)

type GoogleMapsPlayablelocationsV3Impression struct {
	GameObjectType *int32                                                     `json:"gameObjectType"`
	ImpressionType *GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum `json:"impressionType"`
	LocationName   *string                                                    `json:"locationName"`
}
