package shared

type VideoSourceEnum string

const (
	VideoSourceEnumSourceUnspecified VideoSourceEnum = "SOURCE_UNSPECIFIED"
	VideoSourceEnumYoutube           VideoSourceEnum = "YOUTUBE"
	VideoSourceEnumDrive             VideoSourceEnum = "DRIVE"
)

// Video
// A PageElement kind representing a video.
type Video struct {
	ID              *string          `json:"id,omitempty"`
	Source          *VideoSourceEnum `json:"source,omitempty"`
	URL             *string          `json:"url,omitempty"`
	VideoProperties *VideoProperties `json:"videoProperties,omitempty"`
}
