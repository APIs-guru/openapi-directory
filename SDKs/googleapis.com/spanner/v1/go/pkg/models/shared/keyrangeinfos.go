package shared

// KeyRangeInfos
// A message representing a list of specific information for multiple key ranges.
type KeyRangeInfos struct {
	Infos     []KeyRangeInfo `json:"infos,omitempty"`
	TotalSize *int32         `json:"totalSize,omitempty"`
}
