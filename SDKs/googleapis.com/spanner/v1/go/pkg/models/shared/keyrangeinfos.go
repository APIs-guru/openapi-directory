package shared

type KeyRangeInfos struct {
	Infos     []KeyRangeInfo `json:"infos"`
	TotalSize *int32         `json:"totalSize"`
}
