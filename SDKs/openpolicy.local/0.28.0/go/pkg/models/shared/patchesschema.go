package shared

type PatchesSchemaOpEnum string

const (
	PatchesSchemaOpEnumAdd     PatchesSchemaOpEnum = "add"
	PatchesSchemaOpEnumRemove  PatchesSchemaOpEnum = "remove"
	PatchesSchemaOpEnumReplace PatchesSchemaOpEnum = "replace"
	PatchesSchemaOpEnumMove    PatchesSchemaOpEnum = "move"
	PatchesSchemaOpEnumCopy    PatchesSchemaOpEnum = "copy"
	PatchesSchemaOpEnumTest    PatchesSchemaOpEnum = "test"
)

// PatchesSchema
// A JSON patch operation
type PatchesSchema struct {
	Op    PatchesSchemaOpEnum    `json:"op"`
	Path  string                 `json:"path"`
	Value map[string]interface{} `json:"value,omitempty"`
}
