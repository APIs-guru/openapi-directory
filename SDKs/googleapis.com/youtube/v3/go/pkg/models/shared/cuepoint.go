package shared

type CuepointCueTypeEnum string

const (
	CuepointCueTypeEnumCueTypeUnspecified CuepointCueTypeEnum = "cueTypeUnspecified"
	CuepointCueTypeEnumCueTypeAd          CuepointCueTypeEnum = "cueTypeAd"
)

type Cuepoint struct {
	CueType               *CuepointCueTypeEnum `json:"cueType"`
	DurationSecs          *int64               `json:"durationSecs"`
	Etag                  *string              `json:"etag"`
	ID                    *string              `json:"id"`
	InsertionOffsetTimeMs *string              `json:"insertionOffsetTimeMs"`
	WalltimeMs            *string              `json:"walltimeMs"`
}
