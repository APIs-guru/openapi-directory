package shared

type VideoMetadataVastVersionEnum string

const (
	VideoMetadataVastVersionEnumVastVersionUnspecified VideoMetadataVastVersionEnum = "VAST_VERSION_UNSPECIFIED"
	VideoMetadataVastVersionEnumVastVersion10          VideoMetadataVastVersionEnum = "VAST_VERSION_1_0"
	VideoMetadataVastVersionEnumVastVersion20          VideoMetadataVastVersionEnum = "VAST_VERSION_2_0"
	VideoMetadataVastVersionEnumVastVersion30          VideoMetadataVastVersionEnum = "VAST_VERSION_3_0"
	VideoMetadataVastVersionEnumVastVersion40          VideoMetadataVastVersionEnum = "VAST_VERSION_4_0"
)

// VideoMetadata
// Video metadata for a creative.
type VideoMetadata struct {
	Duration    *string                       `json:"duration,omitempty"`
	IsValidVast *bool                         `json:"isValidVast,omitempty"`
	IsVpaid     *bool                         `json:"isVpaid,omitempty"`
	MediaFiles  []MediaFile                   `json:"mediaFiles,omitempty"`
	SkipOffset  *string                       `json:"skipOffset,omitempty"`
	VastVersion *VideoMetadataVastVersionEnum `json:"vastVersion,omitempty"`
}
