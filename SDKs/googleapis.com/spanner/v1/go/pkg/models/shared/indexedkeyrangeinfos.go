package shared

type IndexedKeyRangeInfos struct {
	KeyRangeInfos map[string]KeyRangeInfos `json:"keyRangeInfos,omitempty"`
}
