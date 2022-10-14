package shared

type PatchOpEnum string

const (
	PatchOpEnumAdd     PatchOpEnum = "add"
	PatchOpEnumReplace PatchOpEnum = "replace"
	PatchOpEnumRemove  PatchOpEnum = "remove"
	PatchOpEnumCopy    PatchOpEnum = "copy"
	PatchOpEnumTest    PatchOpEnum = "test"
)

type Patch struct {
	Op    PatchOpEnum  `json:"op"`
	Path  string       `json:"path"`
	Value *interface{} `json:"value,omitempty"`
}
