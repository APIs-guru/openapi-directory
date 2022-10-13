package shared

type VideoMetadataVastVersionEnum string

const (
	VideoMetadataVastVersionEnumVastVersionUnspecified VideoMetadataVastVersionEnum = "VAST_VERSION_UNSPECIFIED"
	VideoMetadataVastVersionEnumVastVersion10          VideoMetadataVastVersionEnum = "VAST_VERSION_1_0"
	VideoMetadataVastVersionEnumVastVersion20          VideoMetadataVastVersionEnum = "VAST_VERSION_2_0"
	VideoMetadataVastVersionEnumVastVersion30          VideoMetadataVastVersionEnum = "VAST_VERSION_3_0"
	VideoMetadataVastVersionEnumVastVersion40          VideoMetadataVastVersionEnum = "VAST_VERSION_4_0"
)

type VideoMetadata struct {
	Duration    *string                       `json:"duration"`
	IsValidVast *bool                         `json:"isValidVast"`
	IsVpaid     *bool                         `json:"isVpaid"`
	MediaFiles  []MediaFile                   `json:"mediaFiles"`
	SkipOffset  *string                       `json:"skipOffset"`
	VastVersion *VideoMetadataVastVersionEnum `json:"vastVersion"`
}
