package shared




type CuepointCueTypeEnum string

const (
    CuepointCueTypeEnumCueTypeUnspecified CuepointCueTypeEnum = "cueTypeUnspecified"
CuepointCueTypeEnumCueTypeAd CuepointCueTypeEnum = "cueTypeAd"
)


type Cuepoint struct {
    CueType *CuepointCueTypeEnum `json:"cueType,omitempty"`
    DurationSecs *int64 `json:"durationSecs,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    InsertionOffsetTimeMs *string `json:"insertionOffsetTimeMs,omitempty"`
    WalltimeMs *string `json:"walltimeMs,omitempty"`
    
}

