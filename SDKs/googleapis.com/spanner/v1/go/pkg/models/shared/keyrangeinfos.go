package shared

type KeyRangeInfos struct {
	Infos     []KeyRangeInfo `json:"infos,omitempty"`
	TotalSize *int32         `json:"totalSize,omitempty"`
}
