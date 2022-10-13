package shared

type VideoSourceEnum string

const (
	VideoSourceEnumSourceUnspecified VideoSourceEnum = "SOURCE_UNSPECIFIED"
	VideoSourceEnumYoutube           VideoSourceEnum = "YOUTUBE"
	VideoSourceEnumDrive             VideoSourceEnum = "DRIVE"
)

type Video struct {
	ID              *string          `json:"id"`
	Source          *VideoSourceEnum `json:"source"`
	URL             *string          `json:"url"`
	VideoProperties *VideoProperties `json:"videoProperties"`
}
