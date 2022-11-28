package shared

type CuepointCueTypeEnum string

const (
	CuepointCueTypeEnumCueTypeUnspecified CuepointCueTypeEnum = "cueTypeUnspecified"
	CuepointCueTypeEnumCueTypeAd          CuepointCueTypeEnum = "cueTypeAd"
)

// Cuepoint
// Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
type Cuepoint struct {
	CueType               *CuepointCueTypeEnum `json:"cueType,omitempty"`
	DurationSecs          *int64               `json:"durationSecs,omitempty"`
	Etag                  *string              `json:"etag,omitempty"`
	ID                    *string              `json:"id,omitempty"`
	InsertionOffsetTimeMs *string              `json:"insertionOffsetTimeMs,omitempty"`
	WalltimeMs            *string              `json:"walltimeMs,omitempty"`
}
