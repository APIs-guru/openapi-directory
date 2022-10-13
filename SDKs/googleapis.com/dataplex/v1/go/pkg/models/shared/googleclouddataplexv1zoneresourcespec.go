package shared

type GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum string

const (
	GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnumLocationTypeUnspecified GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnumSingleRegion            GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum = "SINGLE_REGION"
	GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnumMultiRegion             GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum = "MULTI_REGION"
)

type GoogleCloudDataplexV1ZoneResourceSpec struct {
	LocationType *GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum `json:"locationType"`
}
